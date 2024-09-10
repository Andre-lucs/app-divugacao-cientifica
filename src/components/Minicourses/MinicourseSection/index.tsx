import { EventPageTitle } from "@/src/pages/events";
import { MinicourseSection } from "../styles";
import Minicourse from "../Minicourse";

export default function () {
    return (
        <MinicourseSection>
            <EventPageTitle>Minicursos:</EventPageTitle>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
            <Minicourse subject="Interfaces com React" date="09/09/2024"/>
        </MinicourseSection>
    )
}