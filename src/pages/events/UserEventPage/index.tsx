import RowDetail from "@/src/components/RowDetail";
import { EventAdditionalInfo, EventAdditionalInfoLabel, EventImage, EventInfo, EventName, EventPageActions, EventPageContainer, EventPageDates, EventPageDateText, EventPageTitle } from "..";
import ButtonEvent from "@/src/components/Events/Button/ButtonEvent";
import Colors from "@/src/styles/Colors";
import MinicourseRequestsSection from "@/src/components/Minicourses/MinicourseRequestsSection";
import Map from "@/src/components/Map";
import StackHeader from "@/src/components/StackHeader";
import { useRouter } from "expo-router";
import { TEvent, TMinicourse } from "@/@types/dataTypes";
import { PORT, SERVER_IP } from "@/globalVariables";
import { Text, Alert } from "react-native";
import { formatDate } from "@/src/utils/dateUtils";
import { useContext, useEffect, useState } from "react";
import { MinicourseContext } from "@/src/contexts/MinicourseContext";
import { EventContext } from "@/src/contexts/EventContext";

type EventPageProps = {
    eventData: TEvent | null
}

export default function MyEventPage ({eventData}: EventPageProps) {
    const router = useRouter();
    const [minicourses, setMinicourses] = useState<TMinicourse[]>([]);
    const { getMinicoursesRequests } = useContext(MinicourseContext);
    const { deleteEvent } = useContext(EventContext);

    const fetchMinicourses = async () => {
        if (eventData) {
            const fetchedMinicourses = await getMinicoursesRequests(eventData._id);
            setMinicourses(fetchedMinicourses);
        }
    };

    useEffect(() => {
        fetchMinicourses();
    }, [eventData]);

    const confirmDelete = () => {
        Alert.alert(
            "Confirmar Exclusão",
            "Tem certeza de que deseja excluir este evento?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    onPress: () => handleDeleteEvent()
                }
            ]
        );
    };

    const handleDeleteEvent = async () => {
        if (eventData) {
            await deleteEvent(eventData._id);
            router.push("/events");
        }
    };

    const goToUpdatePage = () => {
        router.push("/events/editEvent");
    };

    if (eventData)
        return (
            <EventPageContainer>
                <StackHeader/>
                <EventImage source={{uri: `${SERVER_IP}:${PORT}${eventData.photo}`}}/>
                <EventPageActions>
                    <ButtonEvent onPress={goToUpdatePage} title="Atualizar" color={`${Colors.blue}`}/>
                    <ButtonEvent onPress={confirmDelete} title="Excluir" color={`${Colors.red}`}/>
                </EventPageActions>
                <EventInfo>
                    <EventPageTitle>Informações Gerais:</EventPageTitle>
                    <RowDetail/>
                    <EventPageDates>
                        <EventPageDateText>Início: {formatDate(eventData.startDate)}</EventPageDateText>
                        <EventPageDateText>Fim: {formatDate(eventData.endDate)}</EventPageDateText>
                    </EventPageDates>
                    <EventName>{eventData.name}</EventName>
                    <EventAdditionalInfoLabel>
                        Tema:
                        <EventAdditionalInfo> {eventData.theme}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <EventAdditionalInfoLabel>
                        Comitê Organizador:
                        <EventAdditionalInfo> {eventData.organizingCommitte}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <EventAdditionalInfoLabel>
                        Descrição:
                        <EventAdditionalInfo> {eventData.description}</EventAdditionalInfo>
                    </EventAdditionalInfoLabel>
                    <RowDetail/>
                </EventInfo>
                <MinicourseRequestsSection eventData={eventData} minicoursesData={minicourses} setMinicoursesData={setMinicourses} />
                <EventPageTitle>Localização:</EventPageTitle>
                <Map coordinates={{ latitude: eventData.location.coordinates[0], longitude: eventData.location.coordinates[1] }} title={eventData.name} />
            </EventPageContainer>
        );

    return <Text>Evento não encontrado</Text>;
}
