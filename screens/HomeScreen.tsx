import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import icon from "../assets/icon2.png";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={icon}
        />
      </View>

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        enablePoweredByContainer={false}
        minLength={2}
        fetchDetails={true}
        onPress={(data, details) => {
          try {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
            console.log(origin.location);
          } catch (error) {
            console.log("Blad dispatch");
          }
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
      />

      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
