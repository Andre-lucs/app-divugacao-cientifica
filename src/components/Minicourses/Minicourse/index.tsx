import {Text} from "react-native";
import { MinicourseInfoPreview, MinicoursePreview, MinicoursePreviewActions, MinicoursePreviewLabel } from "@/src/components/Minicourses/styles";

import Colors from "@/src/styles/Colors";
import ButtonEvent from "@/src/components/Events/Button/ButtonEvent";
import { useContext, useEffect, useState } from "react";
import { MinicourseContext } from "@/src/contexts/MinicourseContext";
import { fetchApi } from "@/src/services/api";

type TMinicourse = {
    subject: string,
    date: string,
    requestId: string,
    userId?: string
    onResolved?: (requestId: string, accepted: boolean) => void
}

export default function ({subject, date, userId, requestId, onResolved}: TMinicourse) {
    const courseContext = useContext(MinicourseContext);
    const [username, setUsername] = useState<string>("");
    async function fetchUsername(){
        setUsername((await fetchApi(`/usuario/byId/${userId}`, {useToken:true})).data.name);
    }

    if(!userId) {
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
        function aproveRequest(): void {
            courseContext.acceptMinicourseRequest(requestId);
            if(onResolved) onResolved(requestId, true);
        }
        function disaproveRequest():void{
            courseContext.refuseMinicourseRequest(requestId);
            if(onResolved) onResolved(requestId, false);
        }
        useEffect(()=>{
            fetchUsername();
        },[]);

        return (
            <MinicoursePreview>
                <MinicourseInfoPreview>
                    <Text><MinicoursePreviewLabel>Tema: </MinicoursePreviewLabel>{subject}</Text>
                    <Text><MinicoursePreviewLabel>Data: </MinicoursePreviewLabel>{date}</Text>
                </MinicourseInfoPreview>
                <MinicoursePreviewActions>
                    <Text><MinicoursePreviewLabel>Promovedor: </MinicoursePreviewLabel>{username}</Text>
                    <ButtonEvent title="Aprovar" onPress={aproveRequest}  width={80}/>
                    <ButtonEvent title="Rejeitar" onPress={disaproveRequest} color={`${Colors.red}`} width={80}/>
                </MinicoursePreviewActions>
            </MinicoursePreview>
        )
    }
    
} 