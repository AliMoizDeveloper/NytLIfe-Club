import { StyleSheet, Text, View,Image ,Linking } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/CommonLayOut'
import {ImageString,Colors1} from '../../constant/Constants'
// import Colors1 from '../../constant/constants'
import { resHeight, resWidth } from '../../constant/WidthHeight'


const SectionPricing = () => {
  const openWebPage = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };
  return (
<BackgroundImage>
  <View style={styles.wholeScreen}>
    <Image source={ImageString.WorldPic} resizeMode='cover'/>
    <Text style={styles.text1}>To Set Bid Section Prices Visit Our WEBSITE </Text>
    <Text
        style={{ color: Colors1.themeColor, textDecorationLine: 'underline' }}
        onPress={() => openWebPage('https://www.google.com/')}
      >
        Open Google
      </Text>
  </View>
</BackgroundImage>
  )
}

export default SectionPricing

const styles = StyleSheet.create({

  wholeScreen:{
flex:1,
justifyContent:'center',
alignItems:'center'

  },
  text1:{
    color:Colors1.white,
    marginTop:resHeight(10),
    fontSize:resWidth(15)
  }
})