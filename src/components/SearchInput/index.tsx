import { StyleSheet, TextInput, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchInput() {
    return (
        <View style={styles.container}>
             <TextInput 
                placeholder="Buscar" 
                style={styles.input}
            />
            <AntDesign name="search1" size={24} color="#7F7F7F" style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#D9D9D9',
        borderWidth: 2,
        height: 48,
        width: '100%',
        paddingHorizontal: 10,
    },
    icon: {
        position: 'absolute',
        left: "95%"
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        color: '#000',
    },
});
