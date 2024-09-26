import { RefreshControl, ScrollView, Text } from "react-native";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import ButtonCreateEvent from "@/src/components/Events/Button/ButtonCreateEvent";
import { TEvent } from "@/@types/dataTypes";
import { useCallback, useState } from "react";

type MyEventsPageProps = {
  events: TEvent[];
};

export default function MyEventsPage({ events }: MyEventsPageProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchText.toLowerCase()) ||
      event.theme.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ContainerPageEvents>
      <StackHeader title="Meus eventos:" />
      <SearchInputContainer>
        <SearchInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Buscar eventos..."
        />
      </SearchInputContainer>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map(({ theme, startDate, name, _id, photo }: TEvent) => (
            <EventPreview
              toUserEvent
              category={theme}
              key={_id}
              startDate={String(startDate)}
              id={_id}
              name={name}
              imageUrl={photo}
            />
          ))
        ) : (
          <Text>Nenhum evento encontrado</Text>
        )}
      </ScrollView>
      <ButtonCreateEvent />
    </ContainerPageEvents>
  );
}
