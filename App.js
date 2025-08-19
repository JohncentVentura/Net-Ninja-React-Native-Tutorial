import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import Navigator from "./routes/homeStack";

//Tutorial 17 Custom Fonts: Using AppLoading is deprecated, use SplashScreen instead
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const getFonts = () =>
  Font.loadAsync({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //Tutorial 17 Custom Fonts: Using AppLoading is deprecated, use useEffect to start async
  useEffect(() => {
    async function fetchFonts() {
      await getFonts();
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }
    fetchFonts();
  }, []);

  if (fontsLoaded) {
    return <Navigator />;
  }
}
