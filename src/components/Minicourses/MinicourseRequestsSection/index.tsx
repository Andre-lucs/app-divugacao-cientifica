import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "@/src/components/Minicourses/styles";
import Minicourse from "@/src/components/Minicourses/Minicourse";
import { MinicourseSectionProps } from "../MinicourseSection";
import { Text } from "react-native";

export default function ({ minicoursesData,setMinicoursesData } : MinicourseSectionProps) {

    function resolve(requestId: string, accepted: boolean) {
        if(setMinicoursesData === undefined) return;
        setMinicoursesData(minicoursesData.filter(({ _id }) => _id !== requestId));
    }
    
    return (
        <MinicourseSection>
            <EventPageTitle>Solicitações de Minicursos:</EventPageTitle>
            
            {(!minicoursesData || minicoursesData.length === 0) 
            ? <Text>Esse evento ainda não possui minicursos</Text>
            : 
            <>
                {minicoursesData.map(({ _id, subject,ministering }) => (
                    <Minicourse subject={subject} date="09/09/2024" key={_id} requestId={_id} userId={ministering} onResolved={resolve} />
                ))}
            </>
            }
        </MinicourseSection>
    )
}