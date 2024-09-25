import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "@/src/components/Minicourses/styles";
import Minicourse from "@/src/components/Minicourses/Minicourse";
import { Text, View } from "react-native";
import { TMinicourse } from "@/@types/dataTypes";
import { Link, useRouter } from "expo-router";
import ButtonEventComponent from "../../Events/Button/ButtonEvent";

type MinicourseSectionProps = {
    minicoursesData: TMinicourse[]; 
    eventId: string;
};

export const MinicourseSectionComponent: React.FC<MinicourseSectionProps> = ({ minicoursesData,eventId }) => {

    const Router = useRouter();

    return (
        <MinicourseSection>
            <EventPageTitle>Minicursos:</EventPageTitle>
            <View style={{alignSelf:"flex-end"}} >
            <ButtonEventComponent title="Solicitar criação" width={150} onPress={()=>Router.push({pathname:"/(tabs)/events/requestMinicourse/[eventId]", params:{eventId}})}/>
            </View>
            {(!minicoursesData || minicoursesData.length === 0) 
            ? <Text>Esse evento ainda não possui minicursos</Text>
            : 
            <>
                {minicoursesData.map(({ _id, subject }) => (
                    <Minicourse subject={subject} date="09/09/2024" key={_id} />
                ))}
            </>
            }
        </MinicourseSection>
    );
};