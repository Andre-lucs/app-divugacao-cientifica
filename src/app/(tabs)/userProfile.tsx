import { Alert, Button, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { FormButton } from "@/src/components/Forms/components";

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
      <Text>Tela do usuario.</Text>
    </View>
  );
}
