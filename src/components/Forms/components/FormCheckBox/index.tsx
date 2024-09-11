import { PropsWithChildren, useState } from 'react';
import { Text } from 'react-native';
import { FormCheckBox, CheckBox } from '@/src/components/Forms/styles';
import { FormInputProps } from '../../types';

type props = FormInputProps & PropsWithChildren<{
  onChange?: (value:boolean)=>void
}>;

export default function(p:props){

  const [checked, setChecked] = useState<boolean>(false);

  return(
    <FormCheckBox>
      <CheckBox value={checked} color={checked ? "#5470FF":''} onValueChange={(v)=>{setChecked(v); if(p.onChange)p.onChange(v)}}  />
      <Text>{p.children}</Text>
    </FormCheckBox>
  )
}