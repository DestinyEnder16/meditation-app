import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'HelveticaNeue-Italic': require('../../assets/fonts/HelveticaNeueItalic.ttf'),
    'HelveticaNeue-Thin': require('../../assets/fonts/HelveticaNeueThin.otf'),
    'HelveticaNeue-Medium': require('../../assets/fonts/HelveticaNeueMedium.otf'),
    'HelveticaNeue-Bold': require('../../assets/fonts/HelveticaNeueBold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false, statusBarStyle: 'dark' }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}
