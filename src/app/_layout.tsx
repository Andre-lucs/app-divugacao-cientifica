import { router, Stack, usePathname } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "@/src/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { EventProvider } from "@/src/contexts/EventContext";
import { AuthContext, AuthProvider } from "@/src/contexts/AuthContext";
export default function RootLayout() {

  const path = usePathname();
  const authContext = useContext(AuthContext)
  
  useEffect(() => {
    console.log("isSigned: " + authContext.isSignedIn);
    // if (!isSignedIn)
    //   router.replace("/auth/login");
  }, [authContext.isSignedIn]);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
      background: Colors.white,
    },
  };

  return (
    <AuthProvider>
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex:1}}>
        {
          authContext.isSignedIn 
          ? (
            <EventProvider>
            <Stack screenOptions={{
            contentStyle: { backgroundColor: theme.colors.background },
            headerShown: false,
            }}>
               <Stack.Screen name="(tabs)" />
            </Stack>
            </EventProvider>
          )
          : (
            <Stack screenOptions={{
            contentStyle: { backgroundColor: theme.colors.background },
            headerShown: false,
            }}>
              <Stack.Screen name="auth" />
            </Stack>
          ) 
        }
        
      </SafeAreaView>
    </PaperProvider>
    </AuthProvider>
  );
}
