import { ScrollView, Text } from "react-native";

import SearchInput from "@/src/components/SearchInput";
import EventPreview from "@/src/components/Events/EventPreview";
import { ContainerPageEvents, SearchInputContainer } from "@/src/pages/events/index";
import StackHeader from "@/src/components/StackHeader";
import ButtonCreateEvent from "../../../components/Events/Button/ButtonCreateEvent";
import { TEvent } from "@/@types/dataTypes";
type props = {
  events : TEvent[]
}

export default function (p:props) {


  return (
    <ContainerPageEvents>
      <StackHeader title="Eventos Disponíveis:"/>
      <SearchInputContainer>
        <SearchInput/>
      </SearchInputContainer>
      <ScrollView>
        {
        p.events.map(({theme, startDate, name, _id, photo}:TEvent)=>
          (<EventPreview category={theme} key={_id} startDate={String(startDate)} id={_id} name={name}  imageUrl={photo} />)
        )
        }
      </ScrollView>
      <ButtonCreateEvent/>
    </ContainerPageEvents>
  );
}
