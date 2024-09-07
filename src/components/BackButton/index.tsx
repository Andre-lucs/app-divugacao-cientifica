import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/src/styles/Colors';

export default function() {
    return (
        <TouchableOpacity style={styles.button}>
            <AntDesign name="arrowleft" size={30} color="#FFFF" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.secondary,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    }
});
