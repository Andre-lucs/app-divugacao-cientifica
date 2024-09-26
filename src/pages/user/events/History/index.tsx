import { ScrollView, Text } from "react-native";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import useEvents from "@/src/hooks/useEvents";
import { useContext, useEffect, useState } from "react";
import { TEvent } from "@/@types/dataTypes";
import { AuthContext } from "@/src/contexts/AuthContext";

export default function () {
  const { userEventHistory } = useEvents();
  const [historyEvents, setHistoryEvents] = useState<TEvent[]>([]);
  const [searchText, setSearchText] = useState("");
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchEventData = async () => {
      if (authContext.authData.userId) {
        const data = await userEventHistory(String(authContext.authData.userId));
        setHistoryEvents(data);
      }
    };

    fetchEventData();
  }, []);

  const filteredEvents = historyEvents.filter(event =>
    event.name.toLowerCase().includes(searchText.toLowerCase()) ||
    event.theme.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ContainerPageEvents>
      <StackHeader title="Histórico:" />
      <SearchInputContainer>
        <SearchInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Buscar no histórico..."
        />
      </SearchInputContainer>
      <ScrollView>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(({ _id, startDate, name, photo, theme }) => (
            <EventPreview
              category={theme}
              id={_id}
              imageUrl={photo}
              startDate={startDate}
              name={name}
              key={_id}
            />
          ))
        ) : (
          <Text>Eventos não encontrados</Text>
        )}
      </ScrollView>
    </ContainerPageEvents>
  );
}
