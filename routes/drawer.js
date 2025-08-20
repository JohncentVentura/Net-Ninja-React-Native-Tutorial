import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  //Only one NavigationContainer can exist since it's the root and wraps all navigators (createStackNavigator, createDrawerNavigator)
  //Drawer.Navigator screenOptions becomes the default values of the options of Stack.Screen components
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/* Tutorial 24 Drawer Navigation: Using v4 which is deprecated, use v5 instead

import { createDrawerNavigator } from "@react-navigation-drawer";
import { createAppContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
*/
