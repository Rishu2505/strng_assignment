import React, { memo } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '@/src/hooks/useTheme';
import { useThemedStyles } from './styles';
import { useHaptics } from '@/src/hooks/useHaptics';
import { User } from '@/src/types';
import { Typography } from '@/src/components';
import { BlurView } from 'expo-blur';

export interface UserCardProps {
    user: User;
    onPress: (id: number) => void;
    index?: number;
}

export const UserCard: React.FC<UserCardProps> = memo(({ user, onPress, index = 0 }) => {
    const theme = useTheme();
    const themedStyles = useThemedStyles();
    const haptics = useHaptics();

    const handlePress = () => {
        haptics.light();
        onPress(user.id);
    };

    return (
        <Animated.View
            entering={FadeInDown.delay(index * 200).duration(800)}
        >
            <BlurView
                intensity={70}
                tint="light"
                style={themedStyles.container}
            >
                <Pressable
                    onPress={handlePress}
                    style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 20 }}
                >
                    <View style={themedStyles.content}>
                        <Typography variant="h3" style={themedStyles.name}>{user.name}</Typography>
                        <View style={themedStyles.infoRow}>
                            <Feather name="briefcase" size={12} color={theme.appDarkGrey} style={themedStyles.icon} />
                            <Typography variant="caption" color={theme.appDarkGrey}>{user.company.name}</Typography>
                        </View>
                        <View style={themedStyles.infoRow}>
                            <Feather name="mail" size={12} color={theme.appDarkGrey} style={themedStyles.icon} />
                            <Typography variant="caption" color={theme.appDarkGrey}>{user.email}</Typography>
                        </View>
                    </View>

                    <Feather name="chevron-right" size={20} color={theme.appDarkGrey} />
                </Pressable>
            </BlurView>
        </Animated.View>
    );
});

export default UserCard;
