import React from 'react';
import { View, Button, Pressable } from 'react-native';
import Typography from '../Typography/Typography';
import { useTheme } from '@/src/hooks/useTheme';
import { m } from '@/src/utils/metrics';
import { Feather } from '@expo/vector-icons';
import { useThemedStyles } from './styles';
import { strings } from './constants';
import { useHaptics } from '@/src/hooks/useHaptics';

interface ErrorStateProps {
    message?: string;
    onRetry?: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({
    message = strings.defaultMessage,
    onRetry
}) => {
    const theme = useTheme();
    const styles = useThemedStyles();
    const haptics = useHaptics();

    const handleRetry = () => {
        haptics.medium();
        onRetry?.();
    };

    return (
        <View style={styles.center}>
            <Feather name="alert-circle" color={theme.appRed} size={m(35)} />
            <Typography variant="caption" style={styles.title}>{strings.title}</Typography>
            <Typography variant="caption" color={theme.appDarkGrey} style={styles.message}>
                {message}
            </Typography>
            {onRetry && (
                <Pressable style={styles.button} onPress={handleRetry}>
                    <Typography variant="caption" color={theme.appWhite}>
                        {strings.retry}
                    </Typography>
                </Pressable>
            )}
        </View>
    );
};

export default ErrorState;
