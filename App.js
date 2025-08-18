import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";

//In the tutorial, AppLoading & expo-app-loading are used but
//AppLoading & expo-app-loading are deprecated, use SplashScreen instead
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      await Font.loadAsync({
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }
    fetchFonts();
  }, []);

  if (fontsLoaded) {
    return <Home />;
  }
}
