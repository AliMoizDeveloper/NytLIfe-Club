import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors1, FontSizes, ScreenWidth1} from '../../constant/Constants';
export default function JobsList({jobsData}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={jobsData.imageUrl} style={styles.cardImage} />
        <View style={styles.cardStyling}>
          <Text style={styles.text1}>{jobsData.title}</Text>
          <Text style={styles.text2}>{jobsData.title1}</Text>
        </View>
      </View>
      <View style={styles.cardStyling1}>
        <Text style={styles.text3}>{jobsData.message}</Text>
        <TouchableOpacity style={{width:ScreenWidth1(0.21),paddingRight:wp('1%')}}>
          <Text style={styles.text4}> Message </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: hp('3%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {width: ScreenWidth1(0.9), height: ScreenWidth1(0.5)},
  cardStyling: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: resHeight(10),
    flexDirection: 'column',
  },
  text1: {color: Colors1.white, fontSize: FontSizes.FS20,fontWeight:'bold'},
  text2: {color: Colors1.white, fontSize: FontSizes.FS18, marginTop: 2},
  cardStyling1: {
    // backgroundColor: 'red',
    backgroundColor: Colors1.themeColor,
    alignItems: 'center',
    justifyContent:"space-between",
    flexDirection: 'row',
    width: ScreenWidth1(0.9),
  },
  text3: {
    color: 'white',
    fontSize: FontSizes.FS13,
    width: ScreenWidth1(0.65),
    paddingVertical: wp('2%'),
    paddingLeft:wp('0.5%')
  },
  text4: {fontSize: FontSizes.FS20, fontWeight: 'bold', color: Colors1.white},
});
