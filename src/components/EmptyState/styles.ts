import { h, v, m } from "@/src/utils/metrics";
import { StyleSheet } from "react-native";
import { useTheme } from "@/src/hooks/useTheme";

export const useThemedStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        center: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: h(32),
            paddingVertical: v(32),
            backgroundColor: theme.transparent,
        },
        message: {
            marginTop: v(10),
            textAlign: 'center',
        },
    });
};
