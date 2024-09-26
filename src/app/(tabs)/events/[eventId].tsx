import { View } from "react-native";
import EventPage from "@/src/pages/events/EventPage";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import useEvents from "@/src/hooks/useEvents";
import { TEvent } from "@/@types/dataTypes";

type TEventResponse = {
    imageUrl: string;
    startDate: string;
    endDate: string;
    name: string;
    theme: string;
    organizer: string;
    committee: string;
    description: string;
}

export default function () {

    const { eventId } = useLocalSearchParams();
    const [eventData, setEventData] = useState<TEvent | null>(null); 
    const { getEventById } = useEvents();

    useEffect(() => {
        const fetchEventData = async () => {
            if (eventId) {
                const data = await getEventById(String(eventId));
                if (data)setEventData(data);
            }
        };

        
        fetchEventData();
        
    }, []);
    
    return (
        <View>
            <EventPage eventData={eventData}  />
        </View>
    )
}