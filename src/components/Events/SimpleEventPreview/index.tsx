import { Link } from "expo-router";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

type SimpleEventPreviewProps = {
    imageUrl: string,
    title: string
}

export default function ({imageUrl, title}: SimpleEventPreviewProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Link href={"/myevent"}  style={{textAlign: "center"}}>
                <View>
                    <Image source={require("@/assets/images/ifpb_logo.jpeg")} style={styles.eventImage}/>
                </View>
                <Text style={styles.eventPreviewText}>{title}</Text>
            </Link>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 141,
        height: 165,
        alignItems: "center",
        gap: 5,
    },

    eventImage: {
        width: 141,
        height: 141,
        borderRadius: 10
    },

    eventPreviewText: {
        textAlign: "center",
        marginTop: 100
    }

})