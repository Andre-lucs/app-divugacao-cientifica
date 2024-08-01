import { useState } from "react";
import FormInput from "../components/FormTextInput";
import DiscreteButton from "../components/DiscreteButton"
import { BaseForm,FormStep } from "../components/BaseForm";

type props = {
  onSubmit: (email: string, senha: string) => void;
  forgotPassword: () => void;
}

export default function LoginForm(p: props) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <>
    <BaseForm onSubmit={()=>p.onSubmit(email, senha)} doneButton="Entrar">
      <FormStep>
        <FormInput value={email} onChangeText={setEmail} required key="email" placeholder="Email"/>
        <FormInput value={senha} onChangeText={setSenha} required key="password" isPassword placeholder="Senha" />
      </FormStep>
    </BaseForm>
    <DiscreteButton onPress={p.forgotPassword}>Esqueceu a senha?</DiscreteButton>
  </>
  )
}
