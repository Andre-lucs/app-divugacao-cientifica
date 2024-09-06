import { Alert, Button, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { FormButton } from "@/src/components/Forms/components";
import React from "react";

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
      </View>
  );

}
