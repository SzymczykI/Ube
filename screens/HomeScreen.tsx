import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import icon from '../assets/icon.png'
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image style={{
            width: 100, height:100, resizeMode: "contain"
        }} source={icon} />
      </View>
      <NavOptions />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})