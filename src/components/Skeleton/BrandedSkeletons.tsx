import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Skeleton } from './Skeleton';
import { h, v, m } from '@/src/utils/metrics';
import { BlurView } from 'expo-blur';

export const UserCardSkeleton = () => (
    <BlurView intensity={70} tint="light" style={styles.user_card}>
        <View style={styles.userContent}>
            <Skeleton width="70%" height={v(20)} borderRadius={m(8)} />
            <Skeleton width="40%" height={v(16)} borderRadius={m(8)} />
            <Skeleton width="40%" height={v(16)} borderRadius={m(8)} />
        </View>
    </BlurView>
);

export const PostCardSkeleton = () => (
    <BlurView intensity={70} tint="light" style={[styles.post_card,]}>
        <Skeleton width="100%" height={v(30)} borderRadius={m(8.5)} />
        <Skeleton width="90%" height={v(20)} borderRadius={m(8)} />
        <Skeleton width="70%" height={v(20)} borderRadius={m(8)} />
        <Skeleton width="30%" height={v(12)} borderRadius={m(8)} />
    </BlurView>
);

const styles = StyleSheet.create({
    user_card: {
        borderRadius: m(28),
        paddingHorizontal: h(20),
        paddingVertical: v(20),
        marginBottom: v(16),
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: v(0.5),
        borderColor: 'rgba(255, 255, 255, 0.4)',
        overflow: 'hidden',
        height: v(100)
    },
    post_card: {
        borderRadius: m(28),
        paddingHorizontal: h(20),
        paddingVertical: v(20),
        marginBottom: v(16),
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: v(0.5),
        borderColor: 'rgba(255, 255, 255, 0.4)',
        overflow: 'hidden',
        height: v(180)
    },

    userContent: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between'
    },
    mb8: { marginBottom: v(8) },
    mb4: { marginBottom: v(4) },
    mb12: { marginBottom: v(12) },
});
