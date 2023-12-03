import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { ImageString } from '../constant/Constants';
// import { GlobalStyle } from '../Style/externalStyle';


 const BackgroundImage = ({children,justifyContent}) => {
  return (
   // <Image source={require('../assets/images/background1.jpg')} style={styles.background}/>
    <ImageBackground source={ImageString.Main_BackGround_Image} style={[styles.background,{justifyContent: justifyContent ||'center'}]}>
      {children}
  </ImageBackground>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode:'cover', // You can customize this property
     // You can customize this property
  },

});

export default BackgroundImage;