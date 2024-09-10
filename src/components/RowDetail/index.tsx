import { StyleSheet, View } from "react-native";

export default function () {
    return (
        <View style={styles.row}></View>
    )
}

const styles = StyleSheet.create({
    row:{
        width: 366,
        height: 1.5,
        backgroundColor: "#d6dce5"
    }
})