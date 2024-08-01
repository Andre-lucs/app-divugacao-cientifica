import React, { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { FormBody,Form } from '@/src/components/Forms/styles';
import FormButton from "../FormButton";
import { Alert } from "react-native";

type props = {
  children: ReactElement[] | ReactElement,
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
    setStepCount((p.children instanceof Array) ? p.children.length : 1)
  },[p.children])

  const validateStep = () => {
    const currentStepChildren = (p.children instanceof Array) ? p.children.filter((child, index) => index === step - 1) : [p.children];
    for (let child of currentStepChildren[0].props["children"]) {
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
      {p.children instanceof Array 
        ? p.children.filter((child, index) => index === step - 1) 
        : p.children
      }
        
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