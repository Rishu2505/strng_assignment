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
            paddingTop: HEADER_HEIGHT,
        },
        listContainer: {
            flex: 1,
            paddingHorizontal: h(16),
            paddingVertical: v(16),
        },
        listContent: {
            paddingHorizontal: h(16),
            marginTop: v(16),
            paddingBottom: v(50)
        },
        footer: {
            paddingVertical: v(20),
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
};
