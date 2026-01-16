import { Colors } from "@/src/theme/colors";
import { useColorScheme } from "react-native";

export const useTheme = () => {
    const colorScheme = useColorScheme();
    return Colors[colorScheme ?? "light"];
};
