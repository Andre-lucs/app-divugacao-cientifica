import { ScrollView } from "react-native";
import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import ButtonCreateEvent from "@/src/components/Events/Button/ButtonCreateEvent";
import { TEvent } from "@/@types/dataTypes";

type MyEventsPageProps = {
  events : TEvent[]
}


export default function MyEventsPage ({events}: MyEventsPageProps) {
  return (
    <ContainerPageEvents>
      <StackHeader title="Meus eventos:"/>
      <SearchInputContainer>
          <SearchInput/>
      </SearchInputContainer>
      <ScrollView>
      {
        events && events.map(({theme, startDate, name, _id, photo}:TEvent)=>
          (<EventPreview toUserEvent category={theme} key={_id} startDate={String(startDate)} id={_id} name={name} imageUrl={photo} />)
        )
        }
      </ScrollView>
      <ButtonCreateEvent/>
    </ContainerPageEvents>
  );
}
