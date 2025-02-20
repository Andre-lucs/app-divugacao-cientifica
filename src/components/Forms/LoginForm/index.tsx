import { useState } from "react";
import { BaseForm, DiscreteButton, FormTextInput } from "@/src/components/Forms/components";
import { LoginFormView } from "./styles";
import { z } from 'zod';
import { LoginData } from "@/@types/authTypes";

export const LoginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
}).required();

type ErrorMessagetype = Record<keyof LoginData, string>;

type props = {
  onSubmit: (data: LoginData) => void;
  forgotPassword: () => void;
}

export default function LoginForm(p: props) {

  const [loginState, setLoginState] = useState<LoginData>({email:'', password:''} as LoginData);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);

  const handleSubmit = () => {
    p.onSubmit(loginState);
  };

  return (
  <LoginFormView>
    <BaseForm onSubmit={handleSubmit} doneButton="Entrar" schemes={[LoginSchema]} dataState={loginState} setErrors={setErrors}>
      <BaseForm.Step>
         <FormTextInput value={loginState.email} onChangeText={(v)=>setLoginState({...loginState, email:v})} required key="email" label="Email" placeholder="Insira seu Email" error={errors.email} />
         <FormTextInput value={loginState.password} onChangeText={(v)=>setLoginState({...loginState, password:v})} required key="password" label="Senha" isPassword placeholder="Insira sua Senha" error={errors.password} />
      </BaseForm.Step>
    </BaseForm>
    <DiscreteButton onPress={p.forgotPassword}>Esqueceu a senha?</DiscreteButton>
  </LoginFormView>
  )
}
