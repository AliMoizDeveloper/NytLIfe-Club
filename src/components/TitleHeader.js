import React from 'react';
import { Text, View } from 'react-native';
import {Colors1} from '../constant/Constants';

const CustomTitle = ({
  fontSize1,
  fontSize2,
  fontWeight2,
  textColumn1,
  textColumn2,
  textRow1,
  textRow2, 
  isRow,
  fontColor1,
  fontColor2, 
  fontWeight1,
  alignCenter,
  marginRight1,
  marginBottom1,
  flex,
  marginBottom2
}) => {
  const textStyle1 = {
    fontSize: fontSize1 || 16, // Default font size is 16
    color: fontColor1 || Colors1.white, // Default font color is black
    fontWeight: fontWeight1 || 'normal', // Default font weight is normal
    textAlign: alignCenter ,
    marginRight:marginRight1,
    marginBottom:marginBottom1, flex: flex,
    // ? 'center' : 'left', // Text alignment
  };
  const textStyle2 = {
    fontSize: fontSize2 || 16, // Default font size is 16
    color: fontColor2 || Colors1.white, // Default font color is black
    fontWeight: fontWeight2 || 'normal', // Default font weight is normal
    textAlign: alignCenter,
    marginBottom:marginBottom2
    // ? 'center' : 'left', // Text alignment
  };


  return (
    <View style={{ flexDirection: isRow ? 'row' : 'column' }}>
    {isRow ? (
      <>
        <Text style={textStyle1}>{textRow1||''}</Text>
        <Text style={textStyle2}>{textRow2||''}</Text>
      </>
    ) : (
      <>
        <Text style={textStyle1}>{textColumn1||''}</Text>
        <Text style={textStyle2}>{textColumn2||''}</Text>
      </>
    )}
  </View>
  );
};

export default CustomTitle;