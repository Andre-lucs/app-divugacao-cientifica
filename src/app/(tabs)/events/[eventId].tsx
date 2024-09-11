import { View } from "react-native";
import EventPage from "@/src//pages/events/event";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function () {

    const {eventId} = useLocalSearchParams();

    console.log(eventId)

    return (
        <View>
            <EventPage/>
        </View>
    )
}