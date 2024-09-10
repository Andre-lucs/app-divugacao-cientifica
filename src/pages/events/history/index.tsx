import { Alert, Button, Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import BackButton from "@/src/components/BackButton";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, HeaderPageEvents, TitlePageEvents } from "..";


export default function () {


  return (
    <ContainerPageEvents>
      <HeaderPageEvents>
        <BackButton/>
        <TitlePageEvents>Histórico:</TitlePageEvents>
        <SearchInput/>
      </HeaderPageEvents>
      <ScrollView>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" date="09/09/2024" name="SBC" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </ScrollView>
    </ContainerPageEvents>
  );
}
