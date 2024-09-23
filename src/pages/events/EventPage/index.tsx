import RowDetail from "@/src/components/RowDetail";
import { EventAdditionalInfo, EventAdditionalInfoLabel, EventImage, EventInfo, EventName, EventPageContainer, EventPageDates, EventPageDateText, EventPageTitle } from "..";
import ButtonEvent from "@/src/components/Events/Button/ButtonEvent";
import MinicourseSection from "@/src/components/Minicourses/MinicourseSection";
import StackHeader from "@/src/components/StackHeader";
import Map from "@/src/components/Map";
import React from "react";
import { TEvent } from "@/@types/dataTypes";
import { PORT, SERVER_IP } from "@/varibles";
import { formatDate } from "@/src/utils/dateUtils";
import Colors from "@/src/styles/Colors";
import RegistrationModal from "@/src/components/Minicourses/RegistrationModal";

type EventPageProps = {
    eventData: TEvent | null
}


const EventPage: React.FC<EventPageProps> = ({eventData}: EventPageProps) => {
    
    if (eventData) {
        return (
            <EventPageContainer>
                <StackHeader/>
                <EventImage source={{uri: `${SERVER_IP}:${PORT}${eventData.photo}`}}/>
                <EventInfo>
                    <ButtonEvent title="Inscrever-se" color={Colors.secondary}/>
                    <EventPageTitle>Informações Gerais:</EventPageTitle>
                    <RowDetail/>
                    <EventPageDates>
                        <EventPageDateText>Início: {formatDate(eventData.startDate)}</EventPageDateText>
                        <EventPageDateText>Fim: {formatDate(eventData.endDate)}</EventPageDateText>
                    </EventPageDates>
                    <EventName>{eventData.name}</EventName>
                    <EventAdditionalInfoLabel>
                        Tema: <EventAdditionalInfo>{eventData.theme}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <EventAdditionalInfoLabel>
                        Organizador: <EventAdditionalInfo>{eventData.organizer}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <EventAdditionalInfoLabel>
                        Comitê Organizador: <EventAdditionalInfo>{eventData.organizingCommitte}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <EventAdditionalInfoLabel>
                        Descrição: <EventAdditionalInfo>{eventData.description}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <RowDetail/>
                </EventInfo>
                <MinicourseSection/>
                <EventPageTitle>Localização:</EventPageTitle>
                <Map/>
            </EventPageContainer>
        )
    } else {
        return null;
    }
};

export default EventPage;
