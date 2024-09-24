import { AuthContextDataType, LoginData, RegisterFormResponse } from "@/@types/authTypes";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { usePathname, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { fetchApi } from "../services/api";

type AuthContextType = {
  authData: AuthContextDataType,
  setAuthData: (data: AuthContextDataType) => void, 
  logOut: () => void,
  login: (data: LoginData) => Promise<AuthContextDataType>,
  register: (data: RegisterFormResponse) => Promise<AuthContextDataType>,
  checkAuth: () => void
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({children}:PropsWithChildren){

  const [authData, setAuthData] = useState<AuthContextDataType>({isSignedIn: false} as AuthContextDataType);
  const router = useRouter();
  const pathName = usePathname();
  
  useEffect(() => {
    checkAuth();
  }, []);

  async function testFetch(){
    return new Promise<AuthContextDataType>((resolve) => {
      setTimeout(() => {
        resolve({
          isSignedIn: true,
          authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlZHJvQGdtYWlsLmNvbSIsImlhdCI6MTcyNzEwNTI1MSwiZXhwIjoxNzI3MTE2MDUxfQ.J9SS2Bh-Fe0m9EGuKW5QTHzMhRXvK-Lzfz5qHMI4f4U',
          username: 'Thiago',
          email: 'thiagomarinho@rockeseat.com.br',
        });
      }, 2000);
    });
  }

  async function storeData(value: AuthContextDataType) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('authData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  function checkAuth(){
    AsyncStorage.getItem('authData')
    .then((user) => {
      const authData = JSON.parse(user||"{}");
      const authDataTyped = authData as AuthContextDataType;
      if (authDataTyped.authToken) {
        const decodedToken = jwtDecode(authDataTyped.authToken);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          console.log('User logged');
          setAuthData(authDataTyped);
          router.replace("/");
          return;
        }
        console.error("Token expired");
      } 
      console.log("User not logged");
      logOut();    
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  async function login(data : LoginData) : Promise<AuthContextDataType> {
    let response = await fetchApi("/usuario/login",{
      method: "post", 
      useToken: false, 
      data
    });
    if (response?.data){
      let dataToStore : AuthContextDataType = {authToken: response.data.token, isSignedIn: true, email: response.data.user.email, username: response.data.user.name};
      setAuthData(dataToStore);
      storeData(dataToStore);
      router.replace("/");
      return response.data;
    }
    throw new Error("Erro ao fazer login");
  }
  
  async function register(data:RegisterFormResponse) : Promise<AuthContextDataType> {
    let newData = await testFetch();
    return await login({email: data.email, password: data.password});
    //if an error ocours, throw an error
  }

  function logOut(){
    setAuthData({isSignedIn: false, authToken: "", email: "", username: ""});
    AsyncStorage.removeItem('authData');
    if (pathName.startsWith("/auth/")) return;
    router.replace("/auth/");
  }

  return (
    <AuthContext.Provider value={{authData, setAuthData, logOut, login, register, checkAuth}}>
      {children}
    </AuthContext.Provider>
  );
}