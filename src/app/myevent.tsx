import { View } from "react-native";
import EventPage from "../pages/events/event";
import Header from "../components/Header";
import TabLayout from "./(tabs)/_layout";
import MyEventPage from "../pages/events/myEvent";

export default function () {
    return (
        <View>
            <MyEventPage/>
        </View>
    )
}