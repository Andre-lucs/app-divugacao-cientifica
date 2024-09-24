import { RegisterFormResponse } from "@/@types/authTypes";
import { FormTextInput, BaseForm, FormStep, FormDateInput, FormCheckBox } from "@/src/components/Forms/components"
import { useEffect, useState } from "react";
import { date, z } from 'zod';

type props = {
  onSubmit: (data: RegisterFormResponse) => void;
}

export const RegisterFormStepOneSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Insira um email válido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmPassword: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
}).required();

export const RegisterFormStepTwoSchema = z.object({
  address: z.string().min(3, "Endereço deve ter no mínimo 3 caracteres"),
  education: z.string().min(3, "Escolaridade deve ter no mínimo 3 caracteres"),
  phone: z.string().min(8, "Telefone deve ter no mínimo 8 caracteres"),
  date: z.date().refine((date) => {
    const inputDate = new Date(date);
      const currentDate = new Date();
      const fifteenYearsAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 15));
      return inputDate <= fifteenYearsAgo;
  }, { message: "Data de nascimento inválida" }),
  acceptEmails: z.boolean().default(false),
});

type ErrorMessagetype = Record<keyof RegisterFormResponse, string>;

export default function Index(p: props) {
  const [res, setRes] = useState<RegisterFormResponse>({acceptEmails:false} as RegisterFormResponse);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);

  const checkEqualPasswords = () => {
    if (res.password === res.confirmPassword) {
      return true;
    } else {
      setErrors({...errors, confirmPassword: 'As senhas não coincidem'});
      return false;
    }
  }

  useEffect(() => {
    //teste data invalida
    // setRes({...res, date:new Date()})
    //teste data valida
    setRes({...res, date:new Date('2000-01-01')})
    console.log(res)
  }, []);


  const handleChange = (field: keyof RegisterFormResponse) => (value: string|Date) => {
    setRes(prevRes => ({ ...prevRes, [field]: value }));
  };

  const handleSubmit = () => {
    p.onSubmit(res);
  }

  return (
    <BaseForm 
    onSubmit={handleSubmit} 
    schemes={[RegisterFormStepOneSchema, RegisterFormStepTwoSchema]}
    dataState={res}
    setErrors={setErrors}
    checkBeforeNext={checkEqualPasswords}
    backButton={null} doneButton="Cadastrar" nextButton="Próximo">
      <FormStep>
        <FormTextInput
          onChangeText={handleChange('name')}
          placeholder="Insira seu nome"
          key="name"
          label="Nome"
          error={errors.name}
          value={res.name || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('email')}
          placeholder="Email"
          key="email"
          error={errors.email}
          value={res.email || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('password')}
          placeholder="Senha"
          key="password"
          isPassword
          error={errors.password}
          value={res.password || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('confirmPassword')}
          placeholder="Confirmar Senha"
          key="confirmPassword"
          isPassword
          error={errors.confirmPassword}
          value={res.confirmPassword || ''}
          required
        />
      </FormStep>
      <FormStep>
        <FormTextInput
          onChangeText={handleChange('address')}
          placeholder="Endereço"
          label="Endereço"
          key="address"
          value={res.address || ''}
          error={errors.address}
          required
        />
        <FormTextInput
          onChangeText={handleChange('education')}
          placeholder="Escolaridade"
          label="Escolaridade"
          key="education"
          value={res.education || ''}
          error={errors.education}
          required
        />
        <FormTextInput
          onChangeText={handleChange('phone')}
          placeholder="Telefone"
          label="Telefone"
          key="phone"
          value={res.phone || ''}
          error={errors.phone}
          required
        />
        <FormDateInput
          key="date"
          required
          value={res.date}
          error={errors.date}
          label="Data de Nascimento:"
          onChangeDate={handleChange('date')}
        />
        <FormCheckBox key="acceptEmails" required={false} value={res.acceptEmails} onChange={(v)=> setRes({...res, acceptEmails:v})}>
          Receber emails sobre novos eventos
        </FormCheckBox>
      </FormStep>
    </BaseForm>
  );
}
