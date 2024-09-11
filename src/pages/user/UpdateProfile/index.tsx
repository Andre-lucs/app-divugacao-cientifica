import { useRouter,Tabs } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function UpdateProfilePage(){
  const router = useRouter();
    return (
        <View>
          <Pressable onPress={()=>{router.back()}}>
            <Text>UpdateProfilePage</Text>
          </Pressable>
        </View>
    );
}