import { CreateEventResponse } from '@/src/components/Forms/EventCreateForm';
import {fetchApi} from './api';
import { MinicourseDataType } from '@/src/components/Forms/CreateMinicourseForm';
import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextDataType } from '@/@types/authTypes';


async function useAuthUserId() {
  let user =  JSON.parse(await AsyncStorage.getItem('authData') ||"{}") as AuthContextDataType;
  if (!user.userId) {
    console.error(JSON.stringify(user));
    throw new Error('User not logged');
  }
  return user.userId;
}

export async function eventCreate(data:CreateEventResponse) : Promise<AxiosResponse<any, any>>
{
  let imageUri = data.image;

  let formData = new FormData();
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('endDate', data.endDate.toUTCString());
  formData.append('startDate', data.startDate.toUTCString());
  formData.append('location', JSON.stringify({
    type: 'Point',
    coordinates: [data.location.latitude, data.location.longitude],
  }));
  formData.append('theme', data.theme);
  formData.append('organizingCommitte', data.committee);
  formData.append('organizer', await useAuthUserId() );
  formData.append('photo', {
    uri: imageUri,
    type: 'image/jpg',
    name: 'photo.jpg',
  } as any);

  return fetchApi('/evento', {
    method: 'POST',
    useToken: true,
    useFormData: true,
    data: formData,
  })

}

export async function requestMinicourse(data: MinicourseDataType, eventId: string) : Promise<AxiosResponse<any, any>>
{
  let renamedData = {
      subject: data.theme,
      ministering: await useAuthUserId(),
      eventId: eventId  
  };
  console.log(renamedData);
  return await fetchApi('/requesicao-minicurso', {
    method: 'POST',
    useToken: true,
    data: renamedData,
  });
}