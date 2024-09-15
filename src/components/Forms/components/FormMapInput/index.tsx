import MapView, { ClickEvent, LatLng, Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { FormInputProps } from '../../types';
import { TextInputErrorLabel } from "../../styles";

type props = FormInputProps & {
  label?: string;
  onChange?: (value: LatLng) => void;
};

export default function (p : props){
  const [location, setLocation] = useState<Location.LocationObjectCoords>({} as Location.LocationObjectCoords);
  const [region, setRegion] = useState<Region>();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let locationObj = await Location.getCurrentPositionAsync({});
        setLocation(locationObj.coords);
        setRegionHandler({...locationObj.coords, latitudeDelta: 0.00922, longitudeDelta: 0.00421});
      })().catch(e => setErrorMsg('Error getting location'));
  }, []);

  const handleDoublePress = (e:ClickEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    console.log(`Double press at: ${latitude}, ${longitude}`);
    setRegionHandler({...region, latitude, longitude} as Region);
  };

  function setRegionHandler(region: Region){
    setRegion(region);
    p.onChange && p.onChange({latitude: region.latitude, longitude: region.longitude});
  }

  return (
    <>
      <MapView 
        style={{width:'100%', height:180,flex:1, borderRadius:5}} 
        region={region||undefined}
        onRegionChangeComplete={setRegionHandler}
        onLongPress={handleDoublePress}
      >
        
        {region && <Marker coordinate={region as LatLng} />}
      </MapView>
      {(p.error|| errorMsg) && <TextInputErrorLabel>{errorMsg+" | "+p.error}</TextInputErrorLabel>}
    </>
  );
}