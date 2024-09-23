import { AuthContextDataType } from "@/@types/authTypes";
import { PORT, SERVER_IP } from "@/varibles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface FetchDataOptions {
  method?: string,
  data?: any,
  params?: any,
  useToken?: boolean
}

export async function fetchApi(path : string, props: FetchDataOptions){
  let TOKEN;
  if (props.useToken){
    let user = await AsyncStorage.getItem('authData');
    const authData = JSON.parse(user||"{}");
    const authDataTyped = authData as AuthContextDataType;
    if (authDataTyped.authToken) {
      TOKEN = authDataTyped.authToken;
    }
  }

    var bearer = 'Bearer ' + `${TOKEN}`;
    console.log("url : "+SERVER_IP+":"+PORT+path)
    const configurationObject = {
      method:(props.method || 'get'),
      url: SERVER_IP+":"+PORT+path,
      headers: {
          authorization : (props.useToken) ? bearer : undefined,
          "Content-Type":"application/json"
      },  
      params: props.params,
      data: props.data
      
    };

    try{
      console.log("data: "+JSON.stringify(configurationObject))
      let response = await axios(configurationObject);
      return response;
    }catch(err: any){
      console.log("probleminha"+err)
      console.log(err.toJSON())
    };
}