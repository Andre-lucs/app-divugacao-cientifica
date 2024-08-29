import { useState } from 'react';
import { BaseTextInput, FormTextInput, TextInputLabel } from '@/src/components/Forms/styles';
import { FormInputProps } from '@/src/components/Forms/types';

type props = FormInputProps & {
  onChangeText?: (text: string) => void;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
}

export default function({value,onChangeText, placeholder,label,isPassword}: props){
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <FormTextInput>
      {label && <TextInputLabel>{label}</TextInputLabel>}
      <BaseTextInput 
      placeholderTextColor="#D9D9D9"
      value={value} 
      onChangeText={onChangeText} 
      placeholder={placeholder}
      secureTextEntry={isPassword && !isPasswordVisible}
      />
    </FormTextInput>
  ) 

}

