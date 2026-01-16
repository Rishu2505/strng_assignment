import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { IMAGES } from '@/src/assets/images';
import { useThemedStyles } from './styles';
import Typography from '../Typography/Typography';
import { useHaptics } from '@/src/hooks/useHaptics';

interface CustomHeaderProps {
    title?: string;
    showBack?: boolean;
    showLogo?: boolean;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    title,
    showBack = false,
    showLogo = false
}) => {
    const styles = useThemedStyles();
    const router = useRouter();
    const haptics = useHaptics();

    const handleBack = () => {
        haptics.light();
        router.back();
    };

    return (
        <BlurView intensity={90} tint="light" style={styles.container}>
            <View style={styles.content}>
                <View style={styles.left}>
                    {showBack && (
                        <TouchableOpacity
                            onPress={handleBack}
                            style={styles.iconButton}
                            activeOpacity={0.7}
                        >
                            <Feather name="chevron-left" size={24} color={styles.backIcon.color as string} />
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.center}>
                    {showLogo ? (
                        <Image
                            source={IMAGES.LOGO}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    ) : (
                        <Typography variant="h3" fontWeight="600" align="center" color={styles.title.color as string}>
                            {title}
                        </Typography>
                    )}
                </View>

                <View style={styles.right} />
            </View>
            <View style={styles.border} />
        </BlurView>
    );
};
