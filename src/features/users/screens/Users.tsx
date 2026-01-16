import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { FlatList, View, TextInput, TouchableOpacity, ListRenderItem } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import { useUsers } from '@/src/features/users/api';
import { UserCard } from '@/src/features/users/components';
import { useUserStore } from '@/src/stores/useUserStore';
import {
    ErrorState,
    EmptyState,
    UserCardSkeleton,
} from '@/src/components';

import { RefreshControl } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useTheme } from '@/src/hooks/useTheme';
import { useThemedStyles } from './styles';
import { strings } from './constants';
import { User } from '@/src/types';
import { useHaptics } from '@/src/hooks/useHaptics';
import { useDebounce } from '@/src/hooks/useDebounce';



export const Users = () => {
    const router = useRouter();
    const theme = useTheme();
    const styles = useThemedStyles();
    const haptics = useHaptics();
    const { data: remoteUsers, isLoading, error, refetch, isRefetching } = useUsers();
    const { users: storedUsers } = useUserStore();

    // Use remote data if available, otherwise fallback to stored data
    const users = remoteUsers || storedUsers;
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const [isFocused, setIsFocused] = useState(false);

    const focusAnim = useSharedValue(0);
    const inputRef = useRef<TextInput>(null);

    // Animate search bar width
    const animatedSearchStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(focusAnim.value === 1 ? '91%' : '85%', { damping: 50, stiffness: 500 }),
        };
    });

    // Update animation value when focus changes
    useEffect(() => {
        focusAnim.value = withSpring(isFocused ? 1 : 0);
    }, [isFocused]);

    const handleRefresh = useCallback(() => {
        if (!isRefetching) {
            haptics.selection();
            refetch();
        }
    }, [isRefetching, refetch, haptics]);



    // Filter users list based on debounced search query
    const filteredUsers = useMemo(() => {
        if (!users) return [];
        return users.filter((user: User) =>
            user.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );
    }, [users, debouncedSearchQuery]);

    // Clear search and remove focus
    const handleClearSearch = useCallback(() => {
        haptics.light();
        setSearchQuery('');
        inputRef.current?.blur();
    }, [haptics]);

    const handleUserPress = useCallback((id: number) => {
        router.push(`/user/${id}`);
    }, [router]);

    const renderItem: ListRenderItem<User> = useCallback(({ item, index }) => (
        <UserCard
            user={item}
            onPress={handleUserPress}
            index={index}
        />
    ), [handleUserPress]);

    if (error) return <ErrorState message={error.message} onRetry={refetch} />;

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.searchContainer, animatedSearchStyle]}
            >
                <Feather name="search" size={20} color={theme.appDarkGrey} style={styles.searchIcon} />
                <TextInput
                    ref={inputRef}
                    style={styles.searchInput}
                    placeholder={strings.search.placeholder}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholderTextColor={theme.appDarkGrey}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                {(isFocused || searchQuery.length > 0) && (
                    <TouchableOpacity
                        onPress={handleClearSearch}
                        style={styles.clearButton}
                        activeOpacity={0.7}
                    >
                        <Feather name="x" size={18} color={theme.appDarkGrey} />
                    </TouchableOpacity>
                )}
            </Animated.View>

            {isLoading ? (
                <View style={styles.listContainer}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <UserCardSkeleton key={i} />
                    ))}
                </View>
            ) : (
                <FlatList
                    data={filteredUsers}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={[styles.listContent, filteredUsers.length === 0 && { flexGrow: 1 }]}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefetching}
                            onRefresh={handleRefresh}
                            tintColor={theme.appWhite}
                            colors={[theme.appPrimary, theme.appSecondary]}
                        />
                    }
                    ListEmptyComponent={<EmptyState message={searchQuery ? strings.search.empty : strings.noUsers} />}
                />
            )}
        </View>
    );
};
