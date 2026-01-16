import { useTheme } from "@/src/hooks/useTheme";
import { fonts } from "@/src/theme/fonts";
import { h, v, m } from "@/src/utils/metrics";
import { StyleSheet } from "react-native";

export const useThemedStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            paddingHorizontal: h(24),
            paddingVertical: v(24),
            borderRadius: m(28),
            marginBottom: v(16),
            borderWidth: v(.5),
            borderColor: theme.appWhite,
            overflow: 'hidden',
            backgroundColor: 'transparent',
        },
        title: {
            fontSize: m(17),
            fontWeight: '600',
            lineHeight: m(24),
            marginBottom: v(12),
            textTransform: 'capitalize',
            color: theme.text,
            textShadowColor: 'transparent',
            textShadowRadius: 0,
            fontFamily: fonts.semiBold
        },
        body: {
            lineHeight: m(22),
            color: theme.appDarkGrey,
        },
        expandButton: {
            marginTop: v(8),
            alignSelf: 'flex-start',
        },
    });
};
