import EventCreateForm, { CreateEventResponse } from "@/src/components/Forms/EventCreateForm";
import StackHeader from "@/src/components/StackHeader";
import { eventCreate } from "@/src/services/eventRequests";
import { Redirect, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

export default function () {
  const [created, setCreated] = useState(false);
  const pathname = usePathname();
  async function handleSubmit(data: CreateEventResponse) {
    let response = await eventCreate(data);
    if (response?.status == 201) {
      Alert.alert('Evento criado com sucesso!');
      setCreated(true);
    }
  }

  useEffect(() => {
    // Redefine o estado created quando o componente é desmontado
    return () => {
      setCreated(false);
    };
  }, [pathname]);

  if (created) {
    return (
      <Redirect href={"/user/event"} />
    );
  } else {
    return (
      <>
        <StackHeader title="Inscrição de Evento" />
        <ScrollView>
          <EventCreateForm onSubmit={handleSubmit} />
        </ScrollView>
      </>
    );
  }
}