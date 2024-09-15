import { useState } from "react";
import { BaseForm, DiscreteButton, FormCheckBox, FormTextInput } from "@/src/components/Forms/components";
import { Form } from "./styles";
import { z } from 'zod';

const UpdateProfileSchema = z.object({
  name: z.string().min(3).max(255),
  education: z.string().min(3).max(255),
  email: z.string().email().min(3).max(255),
  pastPassword: z.string().min(6).max(255),
  newPassword: z.string().min(6).max(255),
  acceptEmails: z.boolean().default(false),
}).required();

export type UpdateProfileData = z.infer<typeof UpdateProfileSchema>;
type ErrorMessagetype = Record<keyof UpdateProfileData, string>;

type props = {
  onSubmit: (data: UpdateProfileData) => void;
}

export default function UpdateProfileForm(p: props) {

  const [data, setDataState] = useState<UpdateProfileData>({
    name: "",
    education: "",
    email: "",
    pastPassword: "",
    newPassword: "",
    acceptEmails: false,
  } as UpdateProfileData);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);


  const handleSubmit = () => {
    p.onSubmit(data);
  };

  const handleChange = (field: keyof UpdateProfileData) => (value: string) => {
    setDataState(prev => ({ ...prev, [field]: value }));
  };

  return (
  <Form>
    <BaseForm onSubmit={handleSubmit} doneButton="Atualizar" schemes={[UpdateProfileSchema]} dataState={data} setErrors={setErrors}>
      <BaseForm.Step>
        <FormTextInput value={data.name} onChangeText={handleChange("name")} required key="name" label="Nome" placeholder="Insira seu Nome" error={errors.name} />
        <FormTextInput value={data.education} onChangeText={handleChange("education")} required key="education" label="Formação" placeholder="Insira sua Formação" error={errors.education} />
        <FormTextInput value={data.email} onChangeText={handleChange("email")} required key="email" label="Email" placeholder="Insira seu Email" error={errors.email} />
        <FormTextInput value={data.pastPassword} onChangeText={handleChange("pastPassword")} required key="pastpassword" label="Senha antiga" isPassword placeholder="Insira sua Senha" error={errors.pastPassword} />
        <FormTextInput value={data.newPassword} onChangeText={handleChange("newPassword")} required key="newpassword" label="Senha nova" isPassword placeholder="Insira sua nova Senha" error={errors.newPassword} />
        <FormCheckBox key="acceptEmails" required={false} value={data.acceptEmails} onChange={(v)=> setDataState({...data, acceptEmails:v})}>
          Receber emails sobre novos eventos
        </FormCheckBox>
      </BaseForm.Step>
    </BaseForm>
  </Form>
  )
}
