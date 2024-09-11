import { Link } from "expo-router";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export type SimpleEventPreviewProps = {
    imageUrl: string,
    title: string,
    id: string
}

export default function ({imageUrl, title, id}: SimpleEventPreviewProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Link href={{pathname: `/events/${id}`,}}  style={{textAlign: "center"}}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.eventImage}/>
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