import React, { useEffect, useState, useContext } from "react";
import { MinicourseContext } from "@/src/contexts/MinicourseContext"; 
import RowDetail from "@/src/components/RowDetail";
import { 
    EventAdditionalInfo, 
    EventAdditionalInfoLabel, 
    EventImage, 
    EventInfo, 
    EventName, 
    EventPageContainer, 
    EventPageDates, 
    EventPageDateText, 
    EventPageTitle 
} from "..";
import ButtonEvent from "@/src/components/Events/Button/ButtonEvent";
import { MinicourseSectionComponent } from "@/src/components/Minicourses/MinicourseSection";
import StackHeader from "@/src/components/StackHeader";
import Map from "@/src/components/Map";
import { TEvent, TMinicourse } from "@/@types/dataTypes"; 
import { PORT, SERVER_IP } from "@/globalVariables";
import { formatDate } from "@/src/utils/dateUtils";
import Colors from "@/src/styles/Colors";
import RegistrationModal from "@/src/components/Minicourses/RegistrationModal";
import useAuth from "@/src/hooks/useAuth";

type EventPageProps = {
    eventData: TEvent | null;
};

const EventPage: React.FC<EventPageProps> = ({ eventData }: EventPageProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { authData } = useAuth();
    const [minicourses, setMinicourses] = useState<TMinicourse[]>([]);
    const { getMinicoursesByIds } = useContext(MinicourseContext);
    const [isRegistered, setIsRegistered] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const hideModal = () => setIsModalVisible(false);

    useEffect(() => {
        const fetchMinicourses = async () => {
            if (eventData && eventData.minicourses && eventData.minicourses.length > 0) {
                const fetchedMinicourses = await getMinicoursesByIds(eventData.minicourses);
                setMinicourses(fetchedMinicourses);
            }
        };

        fetchMinicourses();
    }, [eventData, getMinicoursesByIds]);

    useEffect(() => {
        const checkUserRegistration = () => {
            if (eventData) {
                const registered = eventData.participants?.some((participant) => participant.toLowerCase() === authData.email.toLowerCase()) ?? false;
                setIsRegistered(registered);
            }
        };

        checkUserRegistration();
    }, [eventData, authData.email]);

    const handleRegisterSuccess = () => {
        setIsRegistered(true);
        hideModal();
    };

    if (!eventData) {
        return null; 
    }

    return (
        <EventPageContainer>
            <StackHeader />
            <EventImage source={{ uri: `${SERVER_IP}:${PORT}${eventData.photo}` }} />

            <RegistrationModal
                eventId={eventData._id}
                visible={isModalVisible}
                onDismiss={hideModal}
                onRegisterSuccess={handleRegisterSuccess} 
            />

            <EventInfo>
                <ButtonEvent 
                    title={isRegistered ? "Inscrito" : "Inscrever-se"} 
                    color={isRegistered ? "#7F7F7F" : Colors.secondary} 
                    onPress={isRegistered ? undefined : showModal} 
                    disabled={isRegistered} 
                />
                
                <EventPageTitle>Informações Gerais:</EventPageTitle>
                <RowDetail />
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
                <RowDetail />
            </EventInfo>
            
            <MinicourseSectionComponent eventId={eventData._id} minicoursesData={minicourses} />
            <EventPageTitle>Localização:</EventPageTitle>
            <Map coordinates={ {latitude:eventData.location.coordinates[0], longitude:eventData.location.coordinates[1]}} title={eventData.name} />
        </EventPageContainer>
    );
};

export default EventPage;
