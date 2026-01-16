import { Stack } from "expo-router";

export default function UserPostsLayout() {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent' }, headerShown: false }}>
            <Stack.Screen name="[id]" />
        </Stack>
    );
}
