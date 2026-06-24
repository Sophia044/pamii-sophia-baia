import { Stack } from "expo-router";
import { GluestackUIProvider } from '@/src/components/ui/gluestack-ui-provider';
import '@/src/global.css';

export default function Layout() {
  return (
    <GluestackUIProvider mode="dark">
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}