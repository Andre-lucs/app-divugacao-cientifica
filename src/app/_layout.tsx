import { router, Stack, usePathname } from "expo-router";
import { createContext, useEffect, useState } from "react";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "@/src/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

interface AuthContextType {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  authToken: string;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function RootLayout() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [authToken, setAuthToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const path = usePathname();
  
  useEffect(() => {
    console.log("isSigned: " + isSignedIn);
    // if (!isSignedIn)
    //   router.replace("/auth/login");
  }, [isSignedIn]);

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
    <AuthContext.Provider value={{
      isSignedIn,
      setIsSignedIn,
      username,
      setUsername,
      authToken,
      setAuthToken,
      email,
      setEmail,
    }} >
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex:1}}>
        {
          isSignedIn 
          ? (
            <Stack screenOptions={{
            contentStyle: { backgroundColor: theme.colors.background },
            headerShown: false,
            }}>
               <Stack.Screen name="(tabs)" />
            </Stack>
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
    </AuthContext.Provider>
  );
}
