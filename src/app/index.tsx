import { Alert, Button, Text, View, TextInput } from "react-native";
import {LoginForm, SignUpForm} from "../components/Forms";

export default function Index() {
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
      <LoginForm 
      onSubmit={(email:string, password:string)=>console.log(`Email: ${email} | Password: ${password}`)} 
      forgotPassword={()=>Alert.alert("forgot password")} 
      />

      <SignUpForm/>
    </View>
  );
}
