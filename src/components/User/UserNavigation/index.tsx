import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '@/src/styles/Colors';
import RowDetail from '@/src/components/RowDetail';
import { useRouter } from 'expo-router';

interface NavigationItem {
    icon: JSX.Element;
    title: string;
    path?: string;
}

const navigations: NavigationItem[] = [
    {
        icon: <AntDesign name="hearto" size={24} color={Colors.primary} />,
        title: "Favoritos"
    },
    {
        icon: <Feather name="edit" size={24} color={Colors.primary} />,
        title: "Eventos inscritos"
    },
    {
        icon: <Feather name="upload" size={24} color={Colors.primary} />,
        title: "Atualizar informações",
        path: "/user/updateProfile"
    },
    {
        icon: <MaterialIcons name="article" size={24} color={Colors.primary} />,
        title: "Artigos Publicados"
    },
    {
        icon: <Feather name="bell" size={24} color={Colors.primary} />,
        title: "Certificados"
    },
    {
        icon: <Feather name="archive" size={24} color={Colors.primary} />,
        title: "Eventos criados"
    },
];

export default function () {

    const router = useRouter();

    const renderItem = ({ item }: { item: NavigationItem }) => (
        <TouchableOpacity style={styles.item} onPress={()=>{
            if(item.path){
                router.push(item.path);
            }
        }}>
            {item.icon}
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <RowDetail/>
            <FlatList
                data={navigations}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.container}
                
            />
            <RowDetail/>
            <TouchableOpacity style={styles.item}>
                <Feather name="power" size={24} color={Colors.primary} />
                <Text style={styles.title} >Sair</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
       
    },
    title: {
        fontSize: 18,
        marginLeft: 16,
    },
});

