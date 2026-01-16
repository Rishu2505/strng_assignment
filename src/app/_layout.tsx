import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { queryClient } from '@/src/services/queryClient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useTheme } from '@/src/hooks/useTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { strings } from '@/src/constants/common';
import { commonStyles as styles } from '@/src/styles/common';
import { CustomHeader } from '@/src/components';

SplashScreen.preventAutoHideAsync();

import { LinearGradient } from 'expo-linear-gradient';


export default function RootLayout() {
    const theme = useTheme();

    const [fontsLoaded, error] = useFonts({
        PoppinsMedium: require('@/src/assets/fonts/Poppins-Medium.ttf'),
        PoppinsRegular: require('@/src/assets/fonts/Poppins-Regular.ttf'),
        PoppinsSemiBold: require('@/src/assets/fonts/Poppins-SemiBold.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (fontsLoaded) {
            setTimeout(async () => {
                await SplashScreen.hideAsync();
            }, 1000); // 1s delay for professional feel
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={styles.root}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <LinearGradient
                        colors={['#E0C3FC', '#8EC5FC']} // Pastel Lavender to Blue
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ flex: 1 }}
                    >
                        <Stack
                            screenOptions={{
                                headerTransparent: true,
                                contentStyle: { backgroundColor: 'transparent' },
                                header: (props) => (
                                    <CustomHeader
                                        title={props.options.title || props.route.name}
                                        showBack={props.navigation.canGoBack()}
                                        showLogo={true}
                                    />
                                ),
                            }}
                        >
                            <Stack.Screen
                                name="index"
                                options={{
                                    title: strings.usersTitle,
                                }}
                            />
                            <Stack.Screen
                                name="user"
                                options={{
                                    title: '',
                                    headerShown: true,
                                }}
                            />
                        </Stack>
                    </LinearGradient>
                    <StatusBar style="dark" />
                </SafeAreaProvider>
            </QueryClientProvider>
        </GestureHandlerRootView>
    );
}

