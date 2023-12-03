import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import {Colors1, IconString} from '../../constant/Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;
const Tile = ({ title, subtitle, trail, lead }) => {
  return (
    <View style={styles.tileContainer}>
        <Image source={trail} style={styles.trail} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={IconString.TickCheck} style={styles.leadIcon} />
      {/* <Text style={styles.lead}>{lead}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:hp('2%'),
    // padding: 16,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft:screenWidth*0.03
  },
  title: {
    fontSize: screenWidth*0.04,
    color:Colors1.white,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: screenWidth*0.03,
    color:Colors1.white,
  },
  trail: {
    width: screenWidth*0.15,
    height:screenWidth*0.15,
    borderRadius: 30,
    // marginLeft: 10,
  },
  lead: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  leadIcon:{
    height:hp('3%'),
    width:hp('3%')
  }
});

export default Tile;
