import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

/**
 *
 * @param {object} styles
 */
const LinearGradientComponent = ({ styles, children }) => {
  return (
    <LinearGradient
      colors={['#0097CD', '#01B8E2']}
      start={[0, 0.8]}
      end={[0.8, 0.5]}
      style={styles}
    >
      { children }
    </LinearGradient>
  )
}

export default LinearGradientComponent;
