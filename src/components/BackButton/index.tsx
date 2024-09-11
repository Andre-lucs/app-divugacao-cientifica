import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/src/styles/Colors';
import { useRouter, router } from 'expo-router';

export default function() {
    const router = useRouter();
    return (
        <TouchableOpacity style={styles.button} onPress={()=> router.back()}>
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
