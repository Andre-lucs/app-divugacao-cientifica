import { router, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    console.log("RootLayout mounted");
    router.replace("/login");
  }, []);
  return (
    <Stack screenOptions={{
      contentStyle: { backgroundColor: "#FFFFFF" },
      
      }}
      >
      <Stack.Screen name="login" options={{headerShown: false}} />
      <Stack.Screen name="register" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
