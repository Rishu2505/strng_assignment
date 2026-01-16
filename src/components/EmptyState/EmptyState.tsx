import React from 'react';
import { View } from 'react-native';
import Typography from '../Typography/Typography';
import { useTheme } from '@/src/hooks/useTheme';
import { m } from '@/src/utils/metrics';
import { Feather } from '@expo/vector-icons';
import { useThemedStyles } from './styles';
import { strings } from './constants';

const EmptyState = ({ message = strings.noData }) => {
    const theme = useTheme();
    const styles = useThemedStyles();
    return (
        <View style={styles.center}>
            <Feather name="database" color={theme.appWhite} size={m(38)} />
            <Typography variant="caption" color={theme.appWhite} style={styles.message}>
                {message}
            </Typography>
        </View>
    );
};

export default EmptyState;
