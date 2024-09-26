import { StyleSheet, Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import ButtonSecundary from "../../ButtonSecondary";
import Colors from "@/src/styles/Colors";
import useEvents from "@/src/hooks/useEvents";
import useAuth from "@/src/hooks/useAuth";
import { Redirect } from "expo-router";
import { useState } from "react";

type RegistrationModalProps = {
    visible: boolean;
    onDismiss: () => void;
    eventId: string;
    onRegisterSuccess: () => void; 
}

export default function RegistrationModal({ visible, onDismiss, eventId, onRegisterSuccess }: RegistrationModalProps) {

    const { registerForEvent } = useEvents();
    const [resgistered, setRegistered] = useState(false);

    const {authData} = useAuth();

    async function registerUserForEvent() {
        try {
            await registerForEvent(authData.userId, eventId);
            setRegistered(true);
            onDismiss();
        } catch (error) {
            console.error("Erro ao se inscrever no evento:", error);
        }
    }

    if(resgistered) {
        return <Redirect href="/user/history"/>
    } 

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={style.container}>
                <Text>Deseja realmente se inscrever nesse evento?</Text>
                <View style={style.modalActions}>
                    <ButtonSecundary fontColor={Colors.red} text="Cancelar" action={onDismiss} />
                    <ButtonSecundary fontColor={Colors.primary} text="Confirmar" action={registerUserForEvent} />
                </View>
            </Modal>
        </Portal>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        height: 150,
        margin: 20,
        borderRadius: 10,
        justifyContent: "space-around"
    },
    modalActions: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
