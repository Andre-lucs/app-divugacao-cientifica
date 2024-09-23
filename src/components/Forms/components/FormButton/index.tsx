import { PropsWithChildren } from 'react';
import {FormButton as Button, FormButtonText} from '@/src/components/Forms/styles';

export default function FormButton({children,onPress, color}: PropsWithChildren<{onPress?:()=>void, color?:string}>){
  return (
    <Button style={ color ? {backgroundColor: color} : {}} onPress={onPress}>
      <FormButtonText>{children}</FormButtonText>
    </Button>
  )
}