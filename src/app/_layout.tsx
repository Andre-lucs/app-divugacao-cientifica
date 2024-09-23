import { Slot } from "expo-router";
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Colors from "@/src/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/src/contexts/AuthContext";
export default function RootLayout() {

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
            <Slot/>
      </SafeAreaView>
    </PaperProvider>
    </AuthProvider>
  );
}
