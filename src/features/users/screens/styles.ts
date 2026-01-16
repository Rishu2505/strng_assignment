import { useTheme } from "@/src/hooks/useTheme";
import { h, v, m } from "@/src/utils/metrics";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "@/src/utils/helper";

const HEADER_HEIGHT = v(60) + (getStatusBarHeight() || 0);

export const useThemedStyles = () => {
    const theme = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.transparent,
            paddingTop: HEADER_HEIGHT,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: v(20),
            paddingHorizontal: h(24),
            borderRadius: m(32),
            overflow: 'hidden',
            borderWidth: v(0.5),
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderColor: theme.appWhite,
        },
        searchIcon: {
            marginRight: h(8),
        },
        searchInput: {
            flex: 1,
            height: v(48),
            fontSize: m(16),
            color: theme.text,
            paddingRight: h(32),
        },
        listContainer: {
            flex: 1,
            paddingHorizontal: h(16),
            paddingVertical: v(16),
        },
        listContent: {
            paddingHorizontal: h(16),
            paddingTop: 0,
            paddingBottom: v(50)
        },
        clearButton: {
            position: 'absolute',
            right: h(16),
            paddingHorizontal: h(4),
            paddingVertical: v(4),
        },
        clearIcon: {
            color: 'rgba(255, 255, 255, 0.7)',
        }
    });
};
