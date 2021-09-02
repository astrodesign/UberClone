import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin, setOrigin } from '../slices/navSlice';

const Map = () => {

    const origin = useSelector(selectOrigin); 

    return (
        <MapView
        style={{width: '100%', height: '100%'}}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
}

export default Map

const styles = StyleSheet.create({})
