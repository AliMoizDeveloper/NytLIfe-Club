import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { resFont, resHeight, resWidth } from '../../constant/WidthHeight';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScreenWidth1 } from '../../constant/Constants';
const HorizontalCard = ({ title, imageUri, onPress,padHor }) => {
  // const screenWidth = Dimensions.get('window').width;

  const card = {
    height:hp('27%'),
    // width:wp('30%'),
    borderRadius: resHeight(10),
    margin: hp('1%'),
    paddingHorizontal:padHor,
    // marginBottom: hp('3%')

  }
  const image={
    width: ScreenWidth1(0.4),
    height: ScreenWidth1(0.5), 
    borderRadius: resHeight(10),
    marginBottom: hp('1.5%'),
  }

 const buttonText= {
    textAlign:'center',
    color: 'white',
    fontSize:hp('2%'),

  }

  return (
    <View style={card}>
      <TouchableOpacity onPress={onPress} >
      <Image source={ imageUri } style={image} resizeMode='cover'/>
        <Text style={buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default HorizontalCard;
