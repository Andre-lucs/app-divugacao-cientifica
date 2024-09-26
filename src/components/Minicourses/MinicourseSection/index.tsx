import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "@/src/components/Minicourses/styles";
import Minicourse from "@/src/components/Minicourses/Minicourse";
import { Text, View } from "react-native";
import { TEvent, TMinicourse } from "@/@types/dataTypes";
import { Link, useRouter } from "expo-router";
import ButtonEventComponent from "../../Events/Button/ButtonEvent";

export type MinicourseSectionProps = {
    minicoursesData: TMinicourse[]; 
    eventData: TEvent | null;
    setMinicoursesData?: React.Dispatch<React.SetStateAction<TMinicourse[]>>;
};
const now = new Date();

export const MinicourseSectionComponent: React.FC<MinicourseSectionProps> = ({ minicoursesData,eventData }) => {

    const Router = useRouter();

    const eventStartDate = new Date(eventData?.startDate || "");
    
    return (
        <MinicourseSection>
            <EventPageTitle>Minicursos:</EventPageTitle>
            {eventStartDate < now && <View style={{alignSelf:"flex-end"}} >
            <ButtonEventComponent title="Solicitar criação" width={150} onPress={()=>Router.push({pathname:"/(tabs)/events/requestMinicourse/[eventId]", params:{eventId: eventData?._id}})}/>
            </View>
            }
            {(!minicoursesData || minicoursesData.length === 0) 
            ? <Text>Esse evento ainda não possui minicursos</Text>
            : 
            <>
                {minicoursesData.map(({ _id, subject }) => (
                    <Minicourse subject={subject} date="09/09/2024" key={_id} requestId={_id} />
                ))}
            </>
            }
        </MinicourseSection>
    );
};