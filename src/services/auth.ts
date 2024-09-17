import { AuthContextDataType, LoginData, RegisterFormResponse } from "@/@types/authTypes";

async function testFetch(){
  return new Promise<AuthContextDataType>((resolve) => {
    setTimeout(() => {
      resolve({
        isSignedIn: true,
        authToken: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        username: 'Thiago',
        email: 'thiagomarinho@rockeseat.com.br',
      });
    }, 2000);
  });
}

export async function signIn(data : LoginData) : Promise<AuthContextDataType> {
  //fetch
  //if response.ok
  //return response.data as 
  //else
  //throw error example: new Error("Email não cadastrado") || new Error("Senha incorreta")
  return await testFetch();
}

export async function register(data:RegisterFormResponse){
  return await testFetch();
  //if an error ocours, throw an error
}