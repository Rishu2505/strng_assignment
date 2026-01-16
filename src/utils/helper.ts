import { Dimensions, Platform, StatusBar } from "react-native";
import normalize from "./metrics";

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get("window");

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

// Simple selection for status bar height
if (Platform.OS === "ios") {
    // This is a simplified version of the complex check in Third project
    // In a real app we'd want to check for specific iPhone models
    statusBarHeight = STATUSBAR_X_HEIGHT;
}

export function getStatusBarHeight(skipAndroid?: boolean) {
    return Platform.select({
        ios: statusBarHeight + normalize(10),
        android: skipAndroid ? 0 : (StatusBar.currentHeight ?? 0) + normalize(10),
        default: 0,
    });
}

export const HIT_SLOP = {
    tiny: { top: 5, bottom: 5, left: 5, right: 5 },
    small: { top: 10, bottom: 10, left: 10, right: 10 },
    large: { top: 20, bottom: 20, left: 20, right: 20 },
};

import { truncateWithEllipsis } from "./text";

export { truncateWithEllipsis };

