import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "(main)",
};

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
