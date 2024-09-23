import { AuthContextDataType } from "@/@types/authTypes";
import { createContext, PropsWithChildren, useState } from "react";
import { useRouter } from 'expo-router';

type AuthContextType = {
  authData: AuthContextDataType,
  setAuthData: (data: AuthContextDataType) => void, 
  logOut: () => void
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({children}:PropsWithChildren){

  const [authData, setAuthData] = useState<AuthContextDataType>({isSignedIn: false} as AuthContextDataType);
  const router = useRouter();
  function logOut(){
    setAuthData({isSignedIn: false, authToken: "", email: "", username: ""});
    router.replace("/auth/");
    console.log("asdsadsad"+JSON.stringify(authData))
  }

  return (
    <AuthContext.Provider value={{authData, setAuthData, logOut}}>
      {children}
    </AuthContext.Provider>
  );
}