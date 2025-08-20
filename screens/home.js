import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

//We got access from {navigation} props because this component is included
//in a screen by createStackNavigator, which is coded in homeStack.js
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "League of Legends",
      rating: 5,
      body: "Welcome to Summoners Rift",
      key: "1",
    },
    { title: "Pokemon", rating: 4, body: "Gotta Catch Em All", key: "2" },
    {
      title: "Genshin Impact",
      rating: 3,
      body: "Song of the Welkins Moon",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      {/*Tutorial 22 Passing Data Between Screens: params must be wrapped in an object {item}*/}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", { item })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
