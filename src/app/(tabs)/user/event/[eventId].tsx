import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MyEventPage from "@/src/pages/events/UserEventPage";
import { useEffect, useState } from "react";
import useEvents from "@/src/hooks/useEvents";
import { TEvent } from "@/@types/dataTypes";

export default function () {

    const { eventId } = useLocalSearchParams();
    const [myeventData, setMyEventData] = useState<TEvent | null>(null); 
    const { getEventById } = useEvents();
    
    const fetchMyEventData = async () => {
        if (eventId) {
            const data = await getEventById(String(eventId));
            setMyEventData(data);
        }
    };
    useEffect(() => {        
        fetchMyEventData();
    }, []);
    
    return (
        <View>
            <MyEventPage  eventData={myeventData}/>
        </View>
    );
}
