import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import BackgroundImage from '../../../src/components/CommonLayOut';
import FlatButtons from '../../components/FlatsButtons';
import {RegisterLoginStyle, GlobalStyle} from '../../style/ExternalStyle';
import {Colors1, FontSizes, ImageString, NavigationString} from '../../constant/Constants';
import CustomTitle from '../../components/TitleHeader';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterLogin = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;

  console.log(screenWidth)

  const handleButtonPress = () => {
    console.log('Button pressed');
  };
  return (
    <BackgroundImage justifyContent={'flex-start'}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent:'space-between',
          alignItems:'center',
          marginTop: hp('6%'),
         marginHorizontal:screenWidth*0.11
        }}>
        <CustomTitle
          isRow={false}
          // fontColor={Colors1.white}
          textColumn1="Revolutionize"
          textColumn2="Music"
          fontSize1={hp('3.5%')}
          fontSize2={hp('3.5%')}
          fontWeight1="bold"
          
        />
        <Image
          source={ImageString.Avatar_ImageReg}
          resizeMode="contain"
          style={{
            height: screenWidth < 768 ? hp('10%') : hp('11%'),
            width: screenWidth < 768 ? hp('10%')  : hp('11%'),
          
          }}></Image>
      </View>
      <View
        style={{
          marginTop: hp('2%'),
          marginStart: wp('8%'),
          marginEnd: wp('8%'),
          alignItems:'center',
        }}>
        <Image
          source={ImageString.Banner_Image}
          resizeMode="stretch"
          style={{
            borderRadius: hp('2%'),
            height: screenWidth < 768 ? hp('35%') : hp('35%'),
            width: screenWidth *0.80,
          }}></Image>
        <Text
          style={{
            fontSize: FontSizes.FS25,
            // backgroundColor:'yellow',
            color: 'white',
            marginTop: hp('3%'),
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Connect and Collaborate{' '}
        </Text>

        <Text
          style={{
            fontSize: FontSizes.FS20,
            color: 'white',
            textAlign: 'center',
            marginTop: hp('1.5%'),
            marginEnd: wp('1%'), 
          }}
          numberOfLines={4}>
          Join us in creating unforgettable nights and connect with the beat 
          that moves you. Experience the best night of your life with NiteLyfe
        </Text>
      </View>
      <View style={{marginTop: hp('3%'),
          marginStart: wp('8%'),
          marginEnd: wp('8%'), }}>
        <FlatButtons
          title="Register"
          WidthBtn={wp('80%')}
          buttonHeight={hp('7%')}
          // btnTxtSize={wp('3%')}
          onPress={() => navigation.navigate(NavigationString.Register_Screen)}
          backgroundColor={Colors1.themeColor}
        />
        <View style={{marginTop: hp('2%')}}></View>
         <FlatButtons
        title="Sign In"
          WidthBtn={wp('80%')}
          buttonHeight={hp('7%')}
          // btnTxtSize={wp('3%')}
        onPress={() => navigation.navigate(NavigationString.Login_Screen)}
        transparentBorder={true}
      />
      </View>
    </BackgroundImage>
  );
};

export default RegisterLogin;
