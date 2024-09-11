import { router, Stack, usePathname } from "expo-router";
import { useEffect } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "../styles/Colors";

export default function RootLayout() {

  const path = usePathname();
  
  useEffect(() => {
    console.log("RootLayout mounted");
    console.log(path)
    if (path === "/")
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
//        headerShown: false,
        }}
        >
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="register" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="events/[eventId]" options={{headerShown: false}}/>
        <Stack.Screen name="myEvents/[myEventId]" options={{headerShown: false}}/>
        <Stack.Screen name="user/history" options={{headerShown: false}}/>
        <Stack.Screen name="user/myevents" options={{headerShown: false}}/>
        <Stack.Screen name="user/updateProfile" options={{headerShown: false,presentation:"card",contentStyle:{paddingVertical:50, }}}/>
      </Stack>
    </PaperProvider>
  );
}
