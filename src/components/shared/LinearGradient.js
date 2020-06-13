import React from 'react';
import { LinearGradient } from "expo-linear-gradient";

const LinearGradientComponent = ({ styles, children }) => {
  return (
    <LinearGradient
      colors={["#fe5627", "#fe5627"]}
      start={[0, 0.8]}
      end={[0.8, 0.5]}
      style={styles}
    >
      { children }
    </LinearGradient>
  )
}

export default LinearGradientComponent;
