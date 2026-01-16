import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post } from '@/src/types';

interface PostState {
    // Dictionary of posts by userId to support multiple users offline
    userPosts: Record<number, Post[]>;
    setUserPosts: (userId: number, posts: Post[]) => void;
    addUserPosts: (userId: number, posts: Post[]) => void;
    clearAllPosts: () => void;
}

export const usePostStore = create<PostState>()(
    persist(
        (set) => ({
            userPosts: {},
            setUserPosts: (userId, posts) =>
                set((state) => ({
                    userPosts: { ...state.userPosts, [userId]: posts }
                })),
            addUserPosts: (userId, posts) =>
                set((state) => {
                    const existing = state.userPosts[userId] || [];
                    // Simple deduplication by ID
                    const newPosts = [...existing, ...posts.filter(p => !existing.some(e => e.id === p.id))];
                    return { userPosts: { ...state.userPosts, [userId]: newPosts } };
                }),
            clearAllPosts: () => set({ userPosts: {} }),
        }),
        {
            name: 'post-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
