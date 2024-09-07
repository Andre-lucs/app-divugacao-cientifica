import { Alert, Button, Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { FormButton, FormTextInput } from "@/src/components/Forms/components";
import BackButton from "@/src/components/BackButton";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { FormButtonText } from "@/src/components/Forms/styles";

export default function Index() {
  const [date, setDate] = useState(new Date())

  const imageEventTest = require("@/assets/images/rockeatsetat_logo.png")

  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <BackButton/>
        <Text style={styles.title}>Eventos Disponíveis:</Text>
        <SearchInput/>
      </View>
      <ScrollView>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexGrow:1,
        flexDirection:"column",
        width:'100%',
    },
    header: {
      width: "100%",
      padding: 10, 
      gap: 20
    },
    title: {
      fontSize: 28,
      fontWeight: "600"
    },
    
})