import { FormInputProps } from "../../types";
import { FormDateInput, FormDatePressable, FormInputLabel, TextInputErrorLabel } from "@/src/components/Forms/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import DatePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { useState } from "react";

type props = {
  value: Date;
  label?: string;
  onChangeDate: (value:Date)=>void
} & FormInputProps;

export default function(p:props){

  const [show, setShow] = useState(false);

  const onChangeDate = (event:DateTimePickerEvent, selectedDate?:Date)=>{
    if(selectedDate) p.onChangeDate(selectedDate);
    setShow(false);
  }

  return (
  <FormDatePressable onPress={()=>setShow(true)}>
    {show && <DatePicker value={p.value || new Date()} onChange={onChangeDate}/>}
    {p.label && <FormInputLabel style={{color:'#52525C'}}>{p.label}</FormInputLabel>}
    <FormDateInput>
      <Ionicons name="calendar-number-outline" size={24} color="#000" />
      
      <FormInputLabel>
        {p.value instanceof Date && p.value.toLocaleDateString() || "Insira a data"}
      </FormInputLabel>
    </FormDateInput>
    {p.error && <TextInputErrorLabel>{p.error}</TextInputErrorLabel>}
  </FormDatePressable>
  )
}