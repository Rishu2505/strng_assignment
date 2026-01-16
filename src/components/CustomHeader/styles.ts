import { useTheme } from "@/src/hooks/useTheme";
import { h, v, m } from "@/src/utils/metrics";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "@/src/utils/helper";

const HEADER_HEIGHT = v(60);
const STATUS_BAR_HEIGHT = getStatusBarHeight();
const TOTAL_HEADER_HEIGHT = HEADER_HEIGHT + (STATUS_BAR_HEIGHT || 0);

export const useThemedStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            height: TOTAL_HEADER_HEIGHT,
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 100,
        },
        content: {
            height: HEADER_HEIGHT,
            marginTop: STATUS_BAR_HEIGHT,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: h(16),
        },
        left: {
            flex: 1,
            alignItems: 'flex-start',
        },
        center: {
            flex: 4,
            alignItems: 'center',
            justifyContent: 'center',
        },
        right: {
            flex: 1,
        },
        iconButton: {
            width: h(42),
            height: v(42),
            borderRadius: m(21),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 0.5,
            borderColor: 'rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
        },
        logo: {
            width: h(120),
            height: v(40),
        },
        border: {
            height: 1,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: theme.glass_border,
        },
        title: {
            color: '#FFFFFF',
        },
        backIcon: {
            color: '#FFFFFF',
        }
    });
};

export { TOTAL_HEADER_HEIGHT, HEADER_HEIGHT, STATUS_BAR_HEIGHT };
