import { useRouter, useNavigation } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import UpdateProfileForm, { UpdateProfileData } from '@/src/components/Forms/UpdateProfileForm';

export default function UpdateProfilePage(){

  const Router = useRouter();

  function validate(newData:UpdateProfileData){
    return true;
  }

  function onSubmit(newData:UpdateProfileData){
    if(validate(newData)){
      console.log(newData);
      Router.dismissAll();
      window.location.reload();
    }
  }

  const router = useRouter();
  const navigation = useNavigation();
    return (
        <View>
          <Pressable onPress={()=>{ router.dismissAll()}}>
            <Text>UpdateProfilePage</Text>
          </Pressable>
          <UpdateProfileForm onSubmit={onSubmit}/>
        </View>
    );
}