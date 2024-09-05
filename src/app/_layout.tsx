import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: "#FFFFFF" },
      
      }}
      >
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="register" options={{headerShown: false}} />
    </Stack>
  );
}
