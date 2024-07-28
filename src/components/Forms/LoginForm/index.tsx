import { useRef, useState } from "react";
import { Button } from "react-native";
import FormInput from "../components/FormTextInput";
import DiscreteButton from "../components/DiscreteButton"
import { Form } from "../styles";

type props = {
  onSubmit: (email: string, senha: string) => void;
  forgotPassword: () => void;
}

export default function LoginForm(p: props) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <Form>
    <FormInput value={email} onChangeText={setEmail}  placeholder="Email"/>
    <FormInput value={senha} onChangeText={setSenha} placeholder="Senha" />
    <Button onPress={()=>p.onSubmit(email, senha)} title="Entrar" color='green' />
    <DiscreteButton onPress={p.forgotPassword}>Esqueceu a senha?</DiscreteButton>
  </Form>
  )
}
