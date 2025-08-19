import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";

//We got access from {navigation} props because this component is included
//in a screen by createStackNavigator, which is coded in homeStack.js
export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
    //navigation.push("Home");
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review Details Screen</Text>
      <Button title="Back to Home Screen" onPress={pressHandler} />
    </View>
  );
}
