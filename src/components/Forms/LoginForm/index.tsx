import { useState } from "react";
import { BaseForm, DiscreteButton, FormTextInput } from "@/src/components/Forms/components";
import { LoginFormView } from "./styles";
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email("Insira um email válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
}).required();

export type LoginData = z.infer<typeof LoginSchema>;
type ErrorMessagetype = Record<keyof LoginData, string>;

type props = {
  onSubmit: (data: LoginData) => void;
  forgotPassword: () => void;
}

export default function LoginForm(p: props) {

  const [loginState, setLoginState] = useState<LoginData>({email:'', password:''} as LoginData);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);

    /**
   * This function is a placeholder for the authentication logic.
   * 
   * Currently, it always returns true, indicating that authentication is successful.
   * 
   * To implement proper authentication, you need to:
   * 1. Validate the user's credentials (e.g., email and password).
   * 2. Check the credentials against a database or authentication service.
   * 3. Return true if the credentials are valid, otherwise return false.
   * 4. Store the user's authentication state in a Context.
   */
  function authenticate() {
    return true;
  }

  const handleSubmit = () => {
    if(!authenticate()) return;
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
