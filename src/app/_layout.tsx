import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "../styles/Colors";

export default function RootLayout() {
  useEffect(() => {
    console.log("RootLayout mounted");
    router.replace("/login");
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
      <Stack screenOptions={{
        contentStyle: { backgroundColor: theme.colors.background },
        
        }}
        >
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="register" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
