import CreateMinicourseForm, { MinicourseDataType } from "@/src/components/Forms/CreateMinicourseForm";
import StackHeader from "@/src/components/StackHeader";
import { requestMinicourse } from "@/src/services/eventRequests";
import { Redirect, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

export default function (p : {eventId: string}) {
  const [created, setCreated] = useState(false);
  const pathname = usePathname();


  async function handleSubmit(data: MinicourseDataType) {
    let response = await requestMinicourse(data, p.eventId);
    if (response?.status > 200 && response?.status < 300) {
      Alert.alert('Solicitado com sucesso!');
      setCreated(true);
      return;
    }
    Alert.alert('Erro ao solicitar minicurso');
  }

  useEffect(() => {
    // Redefine o estado created quando o componente é desmontado
    return () => {
      setCreated(false);
    };
  }, [pathname]);

  if (created) {
    return (
      <Redirect href={{pathname:"/(tabs)/events/[eventId]", params:{eventId:p.eventId}}} />
    );
  } else {
    return (
      <>
        <StackHeader title="Inscrição de Minicurso: " />
        <ScrollView>
          <CreateMinicourseForm onSubmit={handleSubmit} />
        </ScrollView>
      </>
    );
  }
}