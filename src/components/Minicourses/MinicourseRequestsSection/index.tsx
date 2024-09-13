import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "@/src/components/Minicourses/styles";
import Minicourse from "@/src/components/Minicourses/Minicourse";

export default function () {
    return (
        <MinicourseSection>
            <EventPageTitle>Requisições de Minicurso:</EventPageTitle>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024" username="Diogo"/>
        </MinicourseSection>
    )
}