import { AuthContextDataType } from "@/@types/authTypes";
import { PORT, SERVER_IP } from "@/globalVariables";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface FetchDataOptions {
  method?: string,
  data?: any,
  params?: any,
  useToken?: boolean,
  useFormData?: boolean
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
  let configurationObject: {
    method: string,
    url: string,
    headers: {
      authorization?: string,
      accept: string,
      'Content-Type'?: string
    },
    params?: any,
    data?: any
  } = {
    method:(options.method || 'get'),
    url: SERVER_IP+":"+PORT+path,
    headers: {
        authorization : (options.useToken) ? bearer : undefined,
        accept: "application/json",
      },  
    params: options.params,
    data: options.data,    
  };

  if (!options.useFormData) {
    configurationObject.headers['Content-Type'] = 'application/json';
  }else{
    configurationObject.headers['Content-Type'] = 'multipart/form-data';
  }

  try {
    let response = await axios(configurationObject);
    return response;
  } catch (error: any) {
    console.log('Network error:', error);
    if (error && error.response) {
      // Server responded with a status other than 2xx
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      console.log('Response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.log('Request data:', error.request);
    } else {
      // Something happened in setting up the request
      console.log('Error message:', error.message);
    }
    throw error;
  }
}