import { AuthContextDataType } from "@/@types/authTypes";
import { createContext, PropsWithChildren, useState } from "react";


type AuthContextType = AuthContextDataType & {setAuthData: (data: AuthContextDataType) => void};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({children}:PropsWithChildren){

  const [authData, setAuthData] = useState<AuthContextDataType>(
    {isSignedIn:true, authToken: "123456", email: "example@email.com", username: "example"});

  return (
    <AuthContext.Provider value={{...authData, setAuthData}}>
      {children}
    </AuthContext.Provider>
  );
}