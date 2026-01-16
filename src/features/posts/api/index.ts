import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { userService } from '@/src/services/userService';
import { usePostStore } from '@/src/stores/usePostStore';

export const useUserPosts = (userId: number) => {
    const { addUserPosts } = usePostStore();

    const query = useInfiniteQuery({
        queryKey: ['posts', userId],
        queryFn: ({ pageParam = 1 }) => userService.getUserPosts(userId, pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1,
        enabled: !!userId,
    });

    useEffect(() => {
        if (query.data) {
            const allPosts = query.data.pages.flat();
            addUserPosts(userId, allPosts);
        }
    }, [query.data, userId, addUserPosts]);

    return query;
};
