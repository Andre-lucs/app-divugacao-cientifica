import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "@/src/components/Minicourses/styles";
import Minicourse from "@/src/components/Minicourses/Minicourse";
import { Text } from "react-native";
import { TMinicourse } from "@/@types/dataTypes";

type MinicourseSectionProps = {
    minicoursesData: TMinicourse[]; 
};

export const MinicourseSectionComponent: React.FC<MinicourseSectionProps> = ({ minicoursesData }) => {


    
    if (!minicoursesData || minicoursesData.length === 0) 
        return (
        <MinicourseSection>
            <EventPageTitle>Minicursos:</EventPageTitle>
            <Text>Esse evento ainda não possui minicursos</Text>
        </MinicourseSection>
        )

    return (
        <MinicourseSection>
            <EventPageTitle>Minicursos:</EventPageTitle>
            {minicoursesData.map(({ _id, subject }) => (
                <Minicourse subject={subject} date="09/09/2024" key={_id} />
            ))}
        </MinicourseSection>
    );
};