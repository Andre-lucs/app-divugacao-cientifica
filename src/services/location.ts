import * as Location from 'expo-location';

export async function getCurrentDeviceCorrdinates(): Promise<Location.LocationObject> {
  let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permission to access location was denied');
        }
  
        let locationObj = await Location.getCurrentPositionAsync({});
        return locationObj;
}