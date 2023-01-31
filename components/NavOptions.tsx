import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export interface IData {
  id: string;
  title: string;
  image: string;
  screen: string;
}

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  const renderData: ListRenderItem<IData> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 rounded-2 m-2 w-40 h-60`}
        
      >
        <View>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{
              uri: item.image,
            }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-5 w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={renderData}
    />
  );
};

export default NavOptions;
