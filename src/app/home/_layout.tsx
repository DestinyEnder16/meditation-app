import { ScreenInfoProvider } from '@/src/contexts/screenContext';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <ScreenInfoProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="course-details" />
        <Stack.Screen name="music-details" />
        <Stack.Screen name="sleep-music-details" />
        <Stack.Screen name="sleep-welcome" />
      </Stack>
    </ScreenInfoProvider>
  );
}
