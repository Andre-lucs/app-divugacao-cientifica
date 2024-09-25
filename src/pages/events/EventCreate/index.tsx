import EventCreateForm, { CreateEventResponse } from "@/src/components/Forms/EventCreateForm";
import StackHeader from "@/src/components/StackHeader";
import { eventCreate } from "@/src/services/eventRequests";
import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";


export default function (){
  const [created, setCreated] = useState(false);
  
  async function handleSubmit(data: CreateEventResponse){
    let response = await eventCreate(data);
    if(response?.status == 201) {
      alert('Evento criado com sucesso!');
      setCreated(true);
    }
  }

  if(created) {
    return <Redirect href={"/user/event"}/>
  }else return (
    <>
      <StackHeader title="Inscrição de Evento" />
      <ScrollView>
        <EventCreateForm onSubmit={handleSubmit} />
      </ScrollView>
    </>
  );
}