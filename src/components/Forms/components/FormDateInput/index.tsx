import { FormInputProps } from "../../types";
import { FormDateInput, FormDateInputText, FormDatePressable, TextInputErrorLabel } from "@/src/components/Forms/styles";
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
    {p.label && <FormDateInputText style={{color:'#52525C'}}>{p.label}</FormDateInputText>}
    <FormDateInput>
      <Ionicons name="calendar-number-outline" size={24} color="#7A7A7A" />
      
      <FormDateInputText>
        {p.value instanceof Date && p.value.toLocaleDateString() || "Insira a data"}
      </FormDateInputText>
    </FormDateInput>
    {p.error && <TextInputErrorLabel>{p.error}</TextInputErrorLabel>}
  </FormDatePressable>
  )
}