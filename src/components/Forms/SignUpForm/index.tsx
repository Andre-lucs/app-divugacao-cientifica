import { BaseForm, FormStep } from "@/src/components/Forms/components/BaseForm"
import FormTextInput from "@/src/components/Forms/components/FormTextInput"
import { useState } from "react";
import FormDateInput from "../components/FormDateInput";
import FormCheckBox from "../components/FormCheckBox";

type props = {
  onSubmit?: (data: formResponse) => void;
}

type formResponse = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  address: string,
  education: string,
  phone: string,
  date: Date,
  acceptEmails: boolean
}

export default function Index(p: props) {
  const [res, setRes] = useState({} as formResponse);

  const handleChange = (field: keyof formResponse) => (value: string) => {
    setRes(prevRes => ({ ...prevRes, [field]: value }));
  };
  const handleChangeDate = (value:Date) =>{
    setRes(prevRes => ({...prevRes, 'date':value}))
  }

  return (
    <BaseForm onSubmit={() => p.onSubmit ? p.onSubmit(res) : undefined} backButton={null} doneButton="Cadastrar" nextButton="Próximo">
      <FormStep>
        <FormTextInput
          onChangeText={handleChange('name')}
          placeholder="Nome"
          key="name"
          value={res.name || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('email')}
          placeholder="Email"
          key="email"
          value={res.email || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('password')}
          placeholder="Senha"
          key="password"
          isPassword
          value={res.password || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('confirmPassword')}
          placeholder="Confirmar Senha"
          key="confirmPassword"
          isPassword
          value={res.confirmPassword || ''}
          required
        />
      </FormStep>
      <FormStep>
        <FormTextInput
          onChangeText={handleChange('address')}
          placeholder="Endereço"
          key="address"
          value={res.address || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('education')}
          placeholder="Escolaridade"
          key="education"
          value={res.education || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('phone')}
          placeholder="Telefone"
          key="phone"
          value={res.phone || ''}
          required
        />
        <FormDateInput
          key="date"
          required
          value={res.date || new Date()}
          label="Data de Nascimento:"
          onChangeDate={handleChangeDate}
        />
        <FormCheckBox key="acceptEmails" required={false} value={res.acceptEmails} onChange={(value)=>setRes(pastRes => ({...pastRes, 'acceptEmails': value}))}/>
      </FormStep>
    </BaseForm>
  );
}