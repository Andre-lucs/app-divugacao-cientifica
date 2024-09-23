import { ScrollView, Text } from "react-native";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import useEvents from "@/src/hooks/useEvents";
import { useEffect, useState } from "react";
import { TEvent } from "@/@types/dataTypes";


export default function () {

  const { userEventHistory} = useEvents();
  const userId = "66e725bee3f330c276451992"
  const [historyEvents, setHistoryEvents] = useState<TEvent[] | null>(null);

  useEffect(() => {

    const fetchEventData = async () => {
      if (userId) {
          const data = await userEventHistory(String(userId));
          setHistoryEvents(data);
      }
    };

    fetchEventData();

  }, [])



  return (
    <ContainerPageEvents>
      <StackHeader title="Histórico:"/>
      <SearchInputContainer>
        <SearchInput/>
      </SearchInputContainer>
      <ScrollView>
       {historyEvents ? historyEvents.map(({_id, startDate, name, photo, theme})=> (
        <EventPreview category={theme} id={_id} imageUrl={photo} startDate={startDate} name={name} key={_id} />
       )) : <Text>Eventos não encontrados</Text>}
      </ScrollView>
    </ContainerPageEvents>
  );
}
