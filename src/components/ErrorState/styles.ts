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
        title: {
            marginTop: v(10),
        },
        message: {
            marginTop: v(5),
            marginBottom: v(15),
            textAlign: 'center',
        },
        button: {
            paddingVertical: v(10),
            paddingHorizontal: h(20),
            borderRadius: m(32),
            backgroundColor: theme.appPrimary,
        },
    });
};
