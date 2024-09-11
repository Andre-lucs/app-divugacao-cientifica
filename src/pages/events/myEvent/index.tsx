import RowDetail from "@/src/components/RowDetail";
import { EventAdditionalInfo, EventAdditionalInfoLabel, EventImage, EventInfo, EventName, EventPageActions, EventPageContainer, EventPageDates, EventPageDateText, EventPageTitle } from "..";
import ButtonEvent from "../components/Button/ButtonEvent";
import Colors from "@/src/styles/Colors";
import MinicourseRequestsSection from "@/src/components/Minicourses/MinicourseRequestsSection";


export default  function MyEventPage () {
    return (
        <EventPageContainer>
            <EventImage source={{uri: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
            <EventPageActions>
                 <ButtonEvent title="Atualizar" color={`${Colors.blue}`}/>
                 <ButtonEvent title="Excluir" color={`${Colors.red}`}/>
            </EventPageActions>
            <EventInfo>
                <EventPageTitle>Informações Gerais:</EventPageTitle>
                <RowDetail/>
                <EventPageDates>
                    <EventPageDateText>Início: 09/09/2024</EventPageDateText>
                    <EventPageDateText>Fim: 15/09/2024</EventPageDateText>
                </EventPageDates>
                <EventName>Nome do Evento</EventName>
                <EventAdditionalInfoLabel>
                    Tema:
                        <EventAdditionalInfo> Programação</EventAdditionalInfo>
                </EventAdditionalInfoLabel>
                <EventAdditionalInfoLabel>
                    Organizador:
                        <EventAdditionalInfo> Organizador</EventAdditionalInfo>
                </EventAdditionalInfoLabel>
                <EventAdditionalInfoLabel>
                    Comitê Organizador: 
                        <EventAdditionalInfo> Comitê Organizador</EventAdditionalInfo>
                </EventAdditionalInfoLabel>
                <EventAdditionalInfoLabel>
                    Descrição: 
                        <EventAdditionalInfo> Programação</EventAdditionalInfo>
                </EventAdditionalInfoLabel>
                <RowDetail/>
            </EventInfo>
            <MinicourseRequestsSection/>
        </EventPageContainer>
    )
}




