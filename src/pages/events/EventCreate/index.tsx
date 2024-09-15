import EventCreateForm from "@/src/components/Forms/EventCreateForm";
import StackHeader from "@/src/components/StackHeader";
import { ScrollView } from "react-native";


export default function (){
  function handleSubmit(data: any){
    console.log(data);
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