import { FormInputProps } from "../types";
import { Pressable, Text, ImageBackground } from 'react-native';
import { FormInputLabel } from '../styles';
import { pickImage } from '@/src/services/imagePicker';

type props = FormInputProps & {
  label?: string;
  onChange?: (value: string) => void;
};

export default function(p:props){

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
    {p.label && <FormInputLabel style={{color:'#52525C'}}>{p.label}</FormInputLabel>}
    <Pressable style={{backgroundColor:'red', width:200, height:200,zIndex:1}} onPress={openImagePicker}>
      <ImageBackground source={{uri:p.value}} style={{width:'100%', height:'100%',zIndex:0, justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:(p.value?"black":"white")}}>{p.value ? "Trocar a imagem?" : "Escolha uma imagem"}</Text>
      </ImageBackground>
    </Pressable>
    </>
  );
}