import { FormTextInput, BaseForm, FormStep, FormDateInput } from "@/src/components/Forms/components"
import { useState } from "react";
import { z } from 'zod';
import FormMapInput from "./components/FormMapInput";
import { LatLng } from "react-native-maps";

const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


type props = {
  onSubmit?: (data: FormResponse) => void;
}

const stepOneSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  description: z.string().min(3, "Descrição deve ter no mínimo 3 caracteres"),
  theme: z.string().min(3, "Tema deve ter no mínimo 3 caracteres"),
  committee: z.string().min(3, "Comitê deve ter no mínimo 3 caracteres"),
  startDate: z.date().default(() => new Date()),
  endDate: z.date().default(() => new Date()),
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Tamanho maximo de images é 10MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Apenas images dos formatos .jpg, .jpeg, .png and .webp são suportados."
    ),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }).required(),
}).required();


type FormResponse = z.infer<typeof stepOneSchema>;
type ErrorMessagetype = Record<keyof FormResponse, string>;

export default function (p: props) {
  const [res, setRes] = useState<FormResponse>({startDate: new Date(), endDate: new Date()} as FormResponse);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);

  const handleChange = (field: keyof FormResponse) => (value: string|Date|LatLng) => {
    setRes(prevRes => ({ ...prevRes, [field]: value }));
  };

  return (
    <BaseForm 
    onSubmit={() => p.onSubmit ? p.onSubmit(res) : undefined} 
    schemes={[stepOneSchema]}
    dataState={res}
    setErrors={setErrors}
    backButton={null} doneButton="Cadastrar" nextButton="Próximo">
      <FormStep>
        <FormTextInput
          onChangeText={handleChange('name')}
          placeholder="Insira seu nome"
          label="Nome"
          key="name"
          error={errors.name}
          value={res.name || ''}
          required
        />
        <FormTextInput
          multiline
          styles={{height: 100}}
          onChangeText={handleChange('description')}
          placeholder="Descrição"
          label="Descrição"
          key="description"
          error={errors.description}
          value={res.description || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('theme')}
          placeholder="Tema"
          label="Tema"
          key="theme"
          error={errors.theme}
          value={res.theme || ''}
          required
        />
        <FormTextInput
          onChangeText={handleChange('committee')}
          placeholder="Comitê Organizador"
          key="committee"
          label="Comitê Organizador"
          error={errors.committee}
          value={res.committee || ''}
          required
        />

        <FormDateInput
          label="Data de Início"
          key="startDate"
          value={res.startDate || ''}
          error={errors.startDate}
          onChangeDate={handleChange('startDate')}
          required
        />
        <FormDateInput
          label="Data de Término"
          key="endDate"
          value={res.endDate}
          error={errors.endDate}
          onChangeDate={handleChange('endDate')}
          required
        />
        <FormMapInput 
        label="Localização:"
        key="location"
        value={res.location}
        onChange={handleChange('location')}
        error={errors.location}
        required
        />

      </FormStep>
    </BaseForm>
  );
}