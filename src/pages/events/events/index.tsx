import { ScrollView } from "react-native";

import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import ButtonCreateEvent from "../components/Button/ButtonCreateEvent";


export default function () {


  return (
    <ContainerPageEvents>
      <StackHeader title="Eventos Disponíveis:"/>
      <SearchInputContainer>
        <SearchInput/>
      </SearchInputContainer>
      <ScrollView>
        <EventPreview category="IA" id="1"  startDate="09/09/2024" name="SBC" path="events/[eventId]" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" id="1"  startDate="09/09/2024" name="SBC" path="events/[eventId]" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" id="1"  startDate="09/09/2024" name="SBC" path="events/[eventId]" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <EventPreview category="IA" id="1"  startDate="09/09/2024" name="SBC" path="events/[eventId]" imageUrl={"https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
      </ScrollView>
      <ButtonCreateEvent/>
    </ContainerPageEvents>
  );
}
