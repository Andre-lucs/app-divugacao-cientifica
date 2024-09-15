import * as ImagePicker from 'expo-image-picker';
import { FormInputProps } from "../types";
import { Pressable, Text, Image, ImageBackground } from 'react-native';
import { FormInputLabel } from '../styles';

type props = FormInputProps & {
  label?: string;
  onChange?: (value: string) => void;
};

export default function(p:props){

  function openImagePicker(){
    ImagePicker.requestMediaLibraryPermissionsAsync().then(({status})=>{
      if(status === 'granted'){
        ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 1,
        })
        .then((result)=>{
          if(!result.canceled){
            p.onChange && p.onChange(result.assets[0].uri);
          }
        })
          
          
      };
      }
    )};

  return (
    <>
    {p.label && <FormInputLabel style={{color:'#52525C'}}>{p.label}</FormInputLabel>}
    <Pressable style={{backgroundColor:'red', width:200, height:200,zIndex:1}} onPress={openImagePicker}>
      <ImageBackground source={{uri:p.value}} style={{width:'100%', height:'100%',zIndex:0, justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:(p.value?"black":"white")}}>{p.value ? "Trocar a imagem?" : "Escolha uma imagem"}</Text>
      </ImageBackground>
    </Pressable>
    </>
  );
}