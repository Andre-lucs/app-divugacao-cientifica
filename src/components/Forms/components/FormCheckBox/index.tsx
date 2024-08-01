import { PropsWithChildren, useState } from 'react';
import { Text } from 'react-native';
import { FormCheckBox, CheckBox } from '@/src/components/Forms/styles';
import { FormInputProps } from '../../types';

type props = FormInputProps & PropsWithChildren<{
  onChange?: (value:boolean)=>void
}>;

export default function(p:props){

  const [checked, setChecked] = useState(false);

  return(
    <FormCheckBox>
      <CheckBox value={checked} color={checked ? "#5470FF":''} onValueChange={setChecked}  />
      <Text>{p.children}</Text>
    </FormCheckBox>
  )
}