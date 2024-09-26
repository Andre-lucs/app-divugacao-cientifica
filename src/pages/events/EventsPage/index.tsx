import { ScrollView, Text } from "react-native";
import { useState } from "react";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import { TEvent } from "@/@types/dataTypes";

type Props = {
  events: TEvent[];
};

export default function EventPage({ events }: Props) {
  const [searchText, setSearchText] = useState("");

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchText.toLowerCase()) ||
    event.theme.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ContainerPageEvents>
      <StackHeader title="Eventos Disponíveis:" />
      <SearchInputContainer>
        <SearchInput
          value={searchText} 
          onChangeText={text => setSearchText(text)} 
          placeholder="Pesquisar eventos..."
        />
      </SearchInputContainer>
      <ScrollView>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(({ theme, startDate, name, _id, photo }: TEvent) => (
            <EventPreview
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
    </ContainerPageEvents>
  );
}

