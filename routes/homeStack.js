import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  //Tutorial 23 Navigation Options: In Stack.Screen, navigationOptions is deprecated, use options instead
  //In Stack.Navigator, defaultNavigationOptions is deprecated, use screenOptions instead
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
        name="Home"
        component={Home}
        options={{
          title: "GameZone",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}

/* Tutorial 20 Stack Navigator: Using v4 which is deprecated, use v5 instead

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
*/
