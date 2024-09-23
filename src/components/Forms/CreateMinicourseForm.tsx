import { FormTextInput, BaseForm, FormStep, FormDateInput } from "@/src/components/Forms/components"
import { useState } from "react";
import { z } from 'zod';
import { LatLng } from "react-native-maps";

type props = {
  onSubmit?: (data: FormResponse) => void;
}

const stepOneSchema = z.object({
  theme: z.string().min(3, "Tema deve ter no mínimo 3 caracteres"),
  description: z.string().min(3, "Descrição deve ter no mínimo 3 caracteres"),
  minicourseDate: z.date().default(() => new Date()),
}).required();


type FormResponse = z.infer<typeof stepOneSchema>;
type ErrorMessagetype = Record<keyof FormResponse, string>;

export default function (p: props) {
  const [res, setRes] = useState<FormResponse>({minicourseDate: new Date()} as FormResponse);
  const [errors, setErrors] = useState<ErrorMessagetype>({} as ErrorMessagetype);

  const handleChange = (field: keyof FormResponse) => (value: string|Date) => {
    setRes(prevRes => ({ ...prevRes, [field]: value }));
  };

  return (
    <BaseForm 
    onSubmit={() => p.onSubmit ? p.onSubmit(res) : undefined} 
    schemes={[stepOneSchema]}
    dataState={res}
    setErrors={setErrors}
    backButton={null} doneButton="Solicitar" nextButton="Próximo">
      <FormStep style={{gap: 5}}>        
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

        <FormDateInput
          label="Data de Início"
          key="startDate"
          value={res.minicourseDate || ''}
          error={errors.minicourseDate}
          onChangeDate={handleChange('minicourseDate')}
          required
        />
      </FormStep>
    </BaseForm>
  );
}