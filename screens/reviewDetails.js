import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";
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
        <Text>{rating}</Text>
      </Card>
    </View>
  );
}
