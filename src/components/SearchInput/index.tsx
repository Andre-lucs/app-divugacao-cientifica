import { StyleSheet, TextInput, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function SearchInput({ value, onChangeText, placeholder }: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder || "Buscar"}
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
    right: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
  },
});
