import { useState } from 'react';
import { FormTextInput, TextInputErrorLabel } from '@/src/components/Forms/styles';
import { FormInputProps } from '@/src/components/Forms/types';
import { TextInput, useTheme } from 'react-native-paper';

type props = FormInputProps & {
  onChangeText?: (text: string) => void;
  placeholder?: string;
  label?: string;
  isPassword?: boolean;
}

export default function({value,onChangeText, placeholder,label,isPassword, error}: props){
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const theme = useTheme();

  return (
    <FormTextInput>
      <TextInput
      mode='outlined'
      label={label}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      error={!!error}
      style={{backgroundColor: theme.colors.surface}}
      secureTextEntry={isPassword && !isPasswordVisible}
      right={isPassword ? <TextInput.Icon onPress={togglePasswordVisibility} icon="eye" /> : ''}
      outlineColor={theme.colors.outline}
      outlineStyle={{borderWidth: 2, borderRadius:8}}
      />
      {error && <TextInputErrorLabel>{error}</TextInputErrorLabel>}
    </FormTextInput>
  ) 

}

