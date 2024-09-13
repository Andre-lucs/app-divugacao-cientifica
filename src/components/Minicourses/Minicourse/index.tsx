import {Text} from "react-native";
import { Label, MinicourseInfoPreview, MinicoursePreview, MinicoursePreviewActions, MinicoursePreviewLabel } from "@/src/components/Minicourses/styles";

import Colors from "@/src/styles/Colors";
import ButtonEvent from "@/src/pages/events/components/Button/ButtonEvent";

type TMinicourse = {
    subject: string,
    date: string,
    username?: string
}

export default function ({subject, date, username}: TMinicourse) {

    if(!username) {
        return (
            <MinicoursePreview>
                <MinicourseInfoPreview>
                    <Text><MinicoursePreviewLabel>Tema: </MinicoursePreviewLabel>{subject}</Text>
                </MinicourseInfoPreview>
                <MinicoursePreviewActions>
                    <Text><MinicoursePreviewLabel>Data: </MinicoursePreviewLabel>{date}</Text>
                    <ButtonEvent title="Increver-se"/>
                </MinicoursePreviewActions>
            </MinicoursePreview>
        )
    } else {
        return (
            <MinicoursePreview>
                <MinicourseInfoPreview>
                    <Text><MinicoursePreviewLabel>Tema: </MinicoursePreviewLabel>{subject}</Text>
                    <Text><MinicoursePreviewLabel>Data: </MinicoursePreviewLabel>{date}</Text>
                </MinicourseInfoPreview>
                <MinicoursePreviewActions>
                    <Text><MinicoursePreviewLabel>Promovedor: </MinicoursePreviewLabel>{username}</Text>
                    <ButtonEvent title="Aprovar"  width={80}/>
                    <ButtonEvent title="Rejeitar" color={`${Colors.red}`} width={80}/>
                </MinicoursePreviewActions>
            </MinicoursePreview>
        )
    }
    
} 