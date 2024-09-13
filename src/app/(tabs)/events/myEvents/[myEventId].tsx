import { View } from "react-native";
import { useLocalSearchParams} from "expo-router";
import MyEventPage from "@/src/pages/events/myEvent";

export default function () {

    const {eventId} = useLocalSearchParams();

    console.log(eventId)

    return (
        <View>
            <MyEventPage/>
        </View>
    )
}