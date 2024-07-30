import { FormInputProps } from "../../types";
import { FormDateInput, FormDateInputText, FormDatePressable } from "@/src/components/Forms/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import DatePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { useEffect, useState } from "react";

type props = FormInputProps & {
  label?: string;
  onChangeDate: (value:Date)=>void
}

export default function(p:props){

  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(()=>{
    if(p.value instanceof Date){
      setDate(p.value);
    }
  },[p]);

  const onChangeDate = (event:DateTimePickerEvent, selectedDate?:Date)=>{
    if(selectedDate) setDate(selectedDate);
    setShow(false);
  }

  return (
  <FormDatePressable onPress={()=>setShow(true)}>
    {show && <DatePicker value={date} onChange={onChangeDate}/>}
    {p.label && <FormDateInputText style={{color:'#52525C'}}>{p.label}</FormDateInputText>}
    <FormDateInput>
      <Ionicons name="calendar-number-outline" size={24} color="#7A7A7A" />
      
      <FormDateInputText>
        {p.value instanceof Date && `${p.value.getDay()}/${p.value.getMonth()}/${p.value.getFullYear()}`}
      </FormDateInputText>
    </FormDateInput>

  </FormDatePressable>
  )
}