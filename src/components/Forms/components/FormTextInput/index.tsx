import { useState } from 'react';
import { TextInput, FormTextInput, Label } from './style';


type props ={
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
}

export default function Index({value,onChangeText, placeholder,label,isPassword}: props){
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <FormTextInput>
      {label && <Label>{label}</Label>}
      <TextInput 
      value={value} 
      onChangeText={onChangeText} 
      placeholder={placeholder}
      secureTextEntry={isPassword && !isPasswordVisible}
      />
    </FormTextInput>
  ) 
  

}

