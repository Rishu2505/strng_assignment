import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Typography from '../Typography/Typography';
import { useTheme } from '@/src/hooks/useTheme';
import { m } from '@/src/utils/metrics';
import { useThemedStyles } from './styles';

import { strings } from './constants';

const LoadingState = () => {
    const theme = useTheme();
    const styles = useThemedStyles();
    return (
        <View style={styles.center}>
            <ActivityIndicator size="large" color={theme.appPrimary} />
            <Typography style={styles.text}>{strings.loading}</Typography>
        </View>
    );
};

export default LoadingState;
