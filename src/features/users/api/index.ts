import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { userService } from '@/src/services/userService';
import { useUserStore } from '@/src/stores/useUserStore';

export const useUsers = () => {
    const { setUsers } = useUserStore();

    const query = useQuery({
        queryKey: ['users'],
        queryFn: userService.getUsers,
    });

    useEffect(() => {
        if (query.data) {
            setUsers(query.data);
        }
    }, [query.data, setUsers]);

    return query;
};
