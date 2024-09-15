import { LoginData } from "@/src/components/Forms/LoginForm";
import { SignUpFormResponse } from "@/src/components/Forms/SignUpForm";

export function signIn(data : LoginData) {
  return new Promise<UserInfoType>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        name: 'Thiago',
        email: 'thiagomarinho@rockeseat.com.br',
      });
    }, 2000);
  });
}

export function register(data:SignUpFormResponse){
  return new Promise<UserInfoType>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        name: 'Thiago',
        email: 'thiagomarinho@rockeseat.com.br',
      });
    }, 2000);
  });
}

export interface UserInfoType {
  token: string;
  name: string;
  email: string;
}