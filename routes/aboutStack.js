import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

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
        options={{
          title: "About GameZone",
        }}
      />
    </Stack.Navigator>
  );
}
