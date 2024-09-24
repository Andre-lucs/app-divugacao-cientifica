import { FormInputProps } from "../types";
import { Pressable, Text, Image, View } from 'react-native';
import { FormInputLabel } from '../styles';
import { pickImage } from '@/src/services/imagePicker';
import Feather from '@expo/vector-icons/Feather';
import { useTheme } from "react-native-paper";

type props = FormInputProps & {
  label?: string;
  onChange?: (value: string) => void;
};

export default function(p:props){

  const theme = useTheme();

  function openImagePicker(){
      pickImage()
      .then((result)=>{
        if(result){
          p.onChange && p.onChange(result[0].uri);
        }
      })
      .catch((e)=>console.log(e));
    };

  return (
    <>
    <FormInputLabel style={{color:'#52525C'}}>Imagem:</FormInputLabel>
    {p.label && <FormInputLabel style={{color:'#52525C'}}>{p.label}</FormInputLabel>}
    <View style={{flexDirection:'row', gap : 50}}>
      <Pressable onPress={openImagePicker}
      style={{backgroundColor:theme.colors.surface, width: 200, height:100,zIndex:1, flexDirection: "row", alignItems:'center', justifyContent:'center', borderRadius:4, borderWidth: 2, borderColor:theme.colors.outline}} >
          <Feather name="image" size={40} color="black" />
          <Text style={{fontSize:18, fontWeight:'bold', color:"black"}}>{p.value ? "Trocar imagem" : "Escolha imagem"}</Text>
      </Pressable>
      { p.value && <Image width={150} height={150} source={{uri: p.value}} style={{ borderRadius:4, borderWidth:2, borderColor:theme.colors.outline}}/>}
    </View>
    </>
  );
}