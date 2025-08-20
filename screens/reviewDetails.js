import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

//We got access from {navigation} props because this component is included
//in a screen by createStackNavigator, which is coded in homeStack.js
export default function ReviewDetails({ route, navigation }) {
  //Tutorial 22 Passing Data Between Screens: navigation.getParam("title") is deprecated,
  //params are accessed from the route prop (route.params), not navigation.getParam
  const { title, body, rating } = route.params.item;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: {rating}</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
