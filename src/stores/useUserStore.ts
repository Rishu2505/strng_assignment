import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@/src/types';

interface UserState {
    users: User[];
    setUsers: (users: User[]) => void;
    clearUsers: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            users: [],
            setUsers: (users) => set({ users }),
            clearUsers: () => set({ users: [] }),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
