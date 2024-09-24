import { CreateEventResponse } from '@/src/components/Forms/EventCreateForm';
import {fetchApi} from './api'
import * as FileSystem from 'expo-file-system';

export async function eventCreate(data:CreateEventResponse){
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
  formData.append('organizer', "656a4d952f028b43876fda75");
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