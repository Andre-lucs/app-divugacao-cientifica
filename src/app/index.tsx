import { Alert, Button, Text, View, TextInput } from "react-native";
import {LoginForm, SignUpForm} from "../components/Forms";
import {BaseForm} from "@/src/components/Forms/components/BaseForm"
import FormTextInput from "../components/Forms/components/FormTextInput";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function Index() {
  const [date, setDate] = useState(new Date())


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexGrow:1,
        flexDirection:"column",
        width:'100%',
        borderWidth: 10, 
        borderColor: '#ccc',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <RNDateTimePicker value={new Date()} />
      {/*<SignUpForm onSubmit={(data)=>{
        console.log(data)
      }}/>*/}
    </View>
  );
}
