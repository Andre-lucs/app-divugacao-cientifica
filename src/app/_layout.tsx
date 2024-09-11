import { router, Stack, usePathname } from "expo-router";
import { useEffect } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "@/src/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  const path = usePathname();
  
  useEffect(() => {
    console.log("RootLayout mounted");
    console.log(path)
    if (path === "/")
      router.replace("/auth/login");
  }, []);

  
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      backgound: Colors.white,
      secondary: 'yellow',
      outline: '#D9D9D9'
    },
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex:1}}>
        <Stack screenOptions={{
          contentStyle: { backgroundColor: theme.colors.background },
          headerShown: false,
          }}
          >
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}
