import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

type MapProps = {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  title?: string;
};

const Map: React.FC<MapProps> = ({ coordinates, title }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.00922, 
          longitudeDelta: 0.00421, 
        }}
      >
        <Marker coordinate={coordinates} title={title} draggable={false} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',  
    height: 300, 
    marginBottom: 100,
  },
  map: {
    flex: 1, 
  },
});

export default Map;
