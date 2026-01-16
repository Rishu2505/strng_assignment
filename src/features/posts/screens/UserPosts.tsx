import React, { useMemo, useCallback, useRef } from 'react';
import { FlatList, View, ActivityIndicator, TextInput, ListRenderItem } from 'react-native';
import { Post } from '@/src/types';
import { useLocalSearchParams } from 'expo-router';
import {
    useSharedValue,
} from 'react-native-reanimated';
import { useUserPosts } from '@/src/features/posts/api';
import { PostCard } from '@/src/features/posts/components';
import { usePostStore } from '@/src/stores/usePostStore';
import {
    ErrorState,
    EmptyState,
    PostCardSkeleton,
} from '@/src/components';
import { RefreshControl } from 'react-native';
import { useTheme } from '@/src/hooks/useTheme';
import { strings } from './constants';
import { useThemedStyles } from './styles';
import { useHaptics } from '@/src/hooks/useHaptics';



export const UserPosts = () => {
    const theme = useTheme();
    const styles = useThemedStyles();
    const focusAnim = useSharedValue(0);
    const inputRef = useRef<TextInput>(null);
    const haptics = useHaptics();
    const { id } = useLocalSearchParams<{ id: string }>();
    const userId = parseInt(id || '0', 10);
    const {
        data,
        isLoading,
        error,
        refetch,
        isRefetching,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useUserPosts(userId);
    const { userPosts } = usePostStore();

    const posts = useMemo<Post[]>(() => {
        // If we have remote data, use it
        if (data?.pages) {
            return data.pages.flat();
        }
        // Fallback to cached data if remote is not available
        return userPosts[userId] || [];
    }, [data, userPosts, userId]);

    const renderItem: ListRenderItem<Post> = useCallback(({ item, index }) => (
        <PostCard post={item} index={index} />
    ), []);

    const handleRefresh = useCallback(() => {
        if (!isRefetching) {
            haptics.selection();
            refetch();
        }
    }, [isRefetching, refetch, haptics]);

    if (error) return <ErrorState message={error.message} onRetry={refetch} />;

    const renderFooter = () => {
        if (!isFetchingNextPage) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="small" color={theme.appPrimary} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.listContainer}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <PostCardSkeleton key={`skeleton-${i}`} />
                    ))}
                </View>
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={[styles.listContent, posts.length === 0 && { flexGrow: 1 }]}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefetching}
                            onRefresh={handleRefresh}
                            tintColor={theme.appWhite}
                            colors={[theme.appPrimary, theme.appSecondary]}
                        />
                    }
                    ListEmptyComponent={<EmptyState message={strings.noPosts} />}
                    onEndReached={() => {
                        if (hasNextPage && !isFetchingNextPage) {
                            fetchNextPage();
                        }
                    }}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooter}
                />
            )}
        </View>
    );
};
