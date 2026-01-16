import { useTheme } from "@/src/hooks/useTheme";
import { StyleSheet, DimensionValue } from "react-native";

export const useThemedStyles = (width: DimensionValue, height: DimensionValue, borderRadius: number) => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            width,
            height,
            borderRadius,
            backgroundColor: theme.glass,
            overflow: 'hidden',
        },
        shimmer: {
            ...StyleSheet.absoluteFillObject,
        },
    });
};
