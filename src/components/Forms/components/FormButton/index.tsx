import { PropsWithChildren } from 'react';
import {FormButton as Button, FormButtonText} from '@/src/components/Forms/styles';

export default function FormButton({children,onPress}: PropsWithChildren<{onPress?:()=>void}>){
  return (
    <Button onPress={onPress}>
      <FormButtonText>{children}</FormButtonText>
    </Button>
  )
}