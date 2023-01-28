import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from "twrnc";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {

const origin = useSelector(selectOrigin);
   

  return (
    <MapView
    style={tw`flex-1`}
    mapType="mutedStandard"
    initialRegion={{
      latitude: origin === null ? 59.911491 : origin.location.lat,
      longitude: origin === null ? 10.757933 : origin.location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  )
}

export default Map

const styles = StyleSheet.create({})