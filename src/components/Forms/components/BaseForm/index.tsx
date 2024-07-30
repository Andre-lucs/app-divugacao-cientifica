import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { FormBody,Form } from '@/src/components/Forms/styles';
import FormButton from "../FormButton";
import { Alert } from "react-native";
import FormTextInput from "../FormTextInput";

type props = {
  children: ReactElement[],
  nextButton?: string,
  backButton?: string | null,  
  doneButton?: string,
  onSubmit?: ()=>void
};

export function BaseForm(p:props){

  const [step, setStep] = useState(1)
  const [stepCount, setStepCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(()=>{
    setStepCount(p.children.length)
  },[p.children])

  const validateStep = () => {
    const currentStepChildren = p.children.filter((child, index) => index === step - 1);
    for (let child of currentStepChildren[0].props["children"]) {
      console.log('lololololg',child.props.required, child.props.value);
      if (child.props.required && !child.props.value) {
        setError('Please fill all required fields.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prevStep => Math.min(prevStep + 1, stepCount));
    }else{
      Alert.alert('Error', error);
    }
  };

  const handleSubmit = () => {
    if (validateStep() && p.onSubmit) {
      p.onSubmit();
    }else{
      Alert.alert('Error', error);
    }
  }

  const handlePrevious = () => {
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  return (
    <Form>
      {p.children.filter((child, index) => index === step - 1)}
        
      {step > 1 && p.backButton != null && (
        <FormButton onPress={handlePrevious}>{p.backButton || "Back"}</FormButton>
      )}

      {step < stepCount ? (
        <FormButton onPress={handleNext} >{p.nextButton || "Next"}</FormButton>
      ) : (
        <FormButton onPress={handleSubmit} >{p.doneButton || "Done"}</FormButton>
      )}
    </Form>
  )
}


export function FormStep({children}: PropsWithChildren<{}>){
  return (
    <FormBody>
      {children}
    </FormBody>
  )
}