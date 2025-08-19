import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const Stack = createStackNavigator();

export default function AboutStack() {
  //Stack.Navigator screenOptions becomes the default values of the options of Stack.Screen components
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#eee" },
        height: 60,
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        //{ navigation } comes from the props of the screen component
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About GameZone" />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
