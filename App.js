import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Router from "./Router";

export default function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
      PoppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
      PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
      PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf")
    });
  };
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return <Router />;
}
