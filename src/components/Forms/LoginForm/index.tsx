import { useState } from "react";
import { View } from "react-native";
import { BaseForm,FormStep, DiscreteButton, FormTextInput } from "@/src/components/Forms/components";
import { LoginFormView } from "./styles";

type props = {
  onSubmit: (email: string, senha: string) => void;
  forgotPassword: () => void;
}

export default function LoginForm(p: props) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <LoginFormView>
    <BaseForm onSubmit={()=>p.onSubmit(email, senha)} doneButton="Entrar">
      <FormStep>
        <FormTextInput value={email} onChangeText={setEmail} required key="email" placeholder="Insira seu Email" label="Email"/>
        <FormTextInput value={senha} onChangeText={setSenha} required key="password" label="Senha" isPassword placeholder="Insira sua Senha" />
      </FormStep>
    </BaseForm>
    <DiscreteButton onPress={p.forgotPassword}>Esqueceu a senha?</DiscreteButton>
  </LoginFormView>
  )
}
