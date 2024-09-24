import EventCreateForm, { CreateEventResponse } from "@/src/components/Forms/EventCreateForm";
import StackHeader from "@/src/components/StackHeader";
import { eventCreate } from "@/src/services/eventRequests";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";


export default function (){
  async function handleSubmit(data: CreateEventResponse){
    let response = await eventCreate(data);
    if(response?.status == 201) {
      alert('Evento criado com sucesso!');
      useRouter().dismiss()
    }
  }

  return (
    <>
      <StackHeader title="Inscrição de Evento" />
      <ScrollView>
        <EventCreateForm onSubmit={handleSubmit} />
      </ScrollView>
    </>
  );
}