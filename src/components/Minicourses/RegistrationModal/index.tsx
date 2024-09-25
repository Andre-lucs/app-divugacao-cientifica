import { StyleSheet, Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import ButtonSecundary from "../../ButtonSecondary";
import Colors from "@/src/styles/Colors";
import useEvents from "@/src/hooks/useEvents";
import useAuth from "@/src/hooks/useAuth";

type RegistrationModalProps = {
    visible: boolean;
    onDismiss: () => void;
    eventId: string;
    onRegisterSuccess: () => void; 
}

export default function RegistrationModal({ visible, onDismiss, eventId, onRegisterSuccess }: RegistrationModalProps) {

    const { registerForEvent } = useEvents();

    const {authData} = useAuth();

    async function registerUserForEvent() {
        try {
            await registerForEvent(authData.email, eventId);
            onDismiss();
        } catch (error) {
            console.error("Erro ao se inscrever no evento:", error);
        }
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
