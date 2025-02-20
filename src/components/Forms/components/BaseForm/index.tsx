import React, { PropsWithChildren, ReactElement, useEffect, useState,forwardRef,useImperativeHandle, ForwardRefExoticComponent } from "react";
import { FormBody,Form } from '@/src/components/Forms/styles';
import FormButton from "../FormButton";
import { Alert, StyleProp, View, ViewStyle } from "react-native";
import {ZodObject, z} from 'zod';
import { useRouter } from "expo-router";

export function validate(data: any, schema: ZodObject<any>, setErrors: Function){
  const result = schema.safeParse(data);
  if (result.success) {
    setErrors({});
    return true;
  } else {
    const newErrors = {};
    result.error.errors.forEach((error) => {
      if (error.path && error.path[0]) {
        Object.defineProperty(newErrors, error.path[0], { value: error.message, enumerable: true });
      }
    });
    setErrors(newErrors);
    console.log("errors: ",newErrors)
    return false;
  }
}

type formStepProps = {
  style?: StyleProp<ViewStyle>;
} & PropsWithChildren;

export const FormStep = (props:formStepProps) => {
  return (
    <FormBody style={props.style}>
      {props.children}
    </FormBody>
  );
};

type props = {
  children: ReactElement[] | ReactElement,
  nextButton?: string,
  backButton?: string | null,  
  doneButton?: string,
  onSubmit?: ()=>void,
  checkBeforeNext?: ()=>boolean,
  schemes: ZodObject<any>[],
  dataState?: any,
  setErrors: React.Dispatch<React.SetStateAction<any>>
};

export function BaseForm(p:props){

  const [step, setStep] = useState(1)
  const [stepCount, setStepCount] = useState(0);
  const router = useRouter();
  useEffect(()=>{
    setStepCount((p.children instanceof Array) ? p.children.length : 1);
    // let keys: string[] = [];
    // p.schemes.forEach(scheme => {
    //   let currStepKeys = Object.keys(scheme.shape);
    //   keys.push(...currStepKeys);
    // });
  },[])

  const validateStep = () => {
    console.log(p.dataState)
    const currentStepChildren = (p.children instanceof Array) ? p.children.filter((child, index) => index === step - 1) : [p.children];
    //validate if all required fields are filled
    for (let child of currentStepChildren[0].props["children"]) {
      if (child.props.required && !child.props.value) {
        Alert.alert('Error', 'Por favor preencha todos os campos.');
        console.log("required field not filled");
        return false;
      }
    }
    //validate if all fields are valid
    let stepScheme = p.schemes[step - 1];
    console.log(validate(p.dataState as z.infer<typeof stepScheme> , stepScheme, p.setErrors))
    return validate(p.dataState as z.infer<typeof stepScheme> , stepScheme, p.setErrors);
  };

  const handleNext = () => {
    if (validateStep()) {
      if(p.checkBeforeNext && !p.checkBeforeNext()) return;
      setStep(prevStep => Math.min(prevStep + 1, stepCount));
    }
  };

  const handleSubmit = () => {
    if (validateStep() && p.onSubmit) {
      if(p.checkBeforeNext && !p.checkBeforeNext()) return;
      p.onSubmit();
    }
  }

  const handlePrevious = () => {
    if(step === 1) {
      if(router.canDismiss()) router.dismiss(1)
      else router.back();
      return;
    }
    setStep(prevStep => Math.max(prevStep - 1, 1));
  };

  return (
    <Form>
      {p.children instanceof Array 
        ? p.children.filter((child, index) => index === step - 1) 
        : p.children
      }
      <View style={{flexDirection:'row', gap:10}}>
      {p.backButton != null && (
        <FormButton color="#f00" onPress={handlePrevious}>{p.backButton || "Back"}</FormButton>
      )}

      {step < stepCount ? (
        <FormButton onPress={handleNext} >{p.nextButton || "Next"}</FormButton>
      ) : (
        <FormButton onPress={handleSubmit} >{p.doneButton || "Done"}</FormButton>
      )}
      </View>
    </Form>
  )
}

BaseForm.validateStep = validate;
BaseForm.Step = FormStep;