import * as ImagePicker from 'expo-image-picker';

export async function pickImage(): Promise<ImagePicker.ImagePickerAsset[] | null> {
  let permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if(permission.status === 'granted'){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    })
    if(!result.canceled){
      return result.assets;
    }
    return null;
  };
  throw new Error('Permission denied');
}