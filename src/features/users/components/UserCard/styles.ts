import { useTheme } from "@/src/hooks/useTheme";
import { h, v, m } from "@/src/utils/metrics";
import { StyleSheet } from "react-native";

export const useThemedStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            padding: 0, // Padding handled by Pressable
            borderRadius: m(28),
            marginBottom: v(16),
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: v(.5),
            borderColor: theme.appWhite,
            overflow: 'hidden',
        },
        content: {
            flex: 1,
        },
        name: {
            fontSize: m(18),
            fontWeight: '600',
            marginBottom: v(4),
            color: theme.text,
            textShadowColor: 'transparent',
            textShadowRadius: 0,
        },
        infoRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: v(2),
        },
        icon: {
            marginRight: h(4),
        },
        chevron: {
            color: "rgba(255,255,255,0.4)",
        }
    });
};
