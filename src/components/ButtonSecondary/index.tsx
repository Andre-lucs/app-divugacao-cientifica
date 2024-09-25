import { TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonSecondaryProps = {
    fontColor: string,
    action?: () => void,
    text: string
}

export default function ({fontColor, action, text}: ButtonSecondaryProps) {
    return (
        <TouchableOpacity onPress={action}>
              <Text style={[{color: fontColor}, style.buttonText]}>{text}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
  
    buttonText: {
      fontWeight: 500,
      margin: 5
    }
  })