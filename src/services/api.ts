import { AuthContextDataType } from "@/@types/authTypes";
import { PORT, SERVER_IP } from "@/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { usePathname, useRouter } from "expo-router";

interface FetchDataOptions {
  method?: string,
  data?: any,
  params?: any,
  useToken?: boolean
}

export async function fetchApi(path : string, options: FetchDataOptions){
  let TOKEN;
  if (options.useToken){
    let user = await AsyncStorage.getItem('authData');
    const authData = JSON.parse(user||"{}");
    const authDataTyped = authData as AuthContextDataType;
    if (authDataTyped.authToken) {
      TOKEN = authDataTyped.authToken;
    }
  }

  var bearer = 'Bearer ' + `${TOKEN}`;
  const configurationObject = {
    method:(options.method || 'get'),
    url: SERVER_IP+":"+PORT+path,
    headers: {
        authorization : (options.useToken) ? bearer : undefined,
        "Content-Type":"application/json"
    },  
    params: options.params,
    data: options.data
    
  };

  try{
    let response = await axios(configurationObject);
    return response;
  }catch(err: any){
    console.error("Problema api: "+err)
    if (err.status === 401){
      AsyncStorage.removeItem('authData');
      if (usePathname().startsWith("/auth/")) return;
      useRouter().replace("/auth/");    
    }
  };
}