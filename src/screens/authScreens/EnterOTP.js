


import { StyleSheet, Text, View,TextInput } from 'react-native'
 import React, { useState } from 'react';
// import NavigationString from '../../constant/navigationString'
import BackgroundImage from '../../components/CommonLayOut'
import TitleHeading from '../../components/TitleAppBarIcons'
import TransparentCard from '../../components/cards/CardConst'
import FlatButtons from '../../components/FlatsButtons'
import { GlobalStyle } from '../../style/ExternalStyle'
import { Colors1, NavigationString } from '../../constant/Constants';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const EnterOTP = ({navigation}) => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };
  
  const [otp, setOtp] = useState(['', '', '', '']);
  
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };
  
  const inputs = [];
  return (
    <BackgroundImage>
    <View style={GlobalStyle.container}>
      <View style={styles.container1}>
      <TitleHeading title={'Enter OTP'} fontSize={heightPercentageToDP('3%')} fontWeight={'bold'} isText={true}/>
      <TransparentCard>
      <Text style={{color:'white',fontSize:heightPercentageToDP('2%')}}>Enter Your E-mail or Phone Number to recover your Password</Text>
      <View style={styles.container3}>
             {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.box}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(value) => handleOtpChange(value, index)}
                value={digit}
                ref={(input) => {
                  inputs[index] = input;
                }}
              />
            ))}
          </View>
        <View style={styles.container2}>
        <FlatButtons title={'Verify OTP'} onPress={()=>navigation.navigate(NavigationString.Create_pass)}/>

        </View>
      </TransparentCard>
      </View>
        
    </View>

      </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },container2:{
    paddingTop:10,
  },
  container3:{
        flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    box: {
    backgroundColor: Colors1.white,
    borderRadius: heightPercentageToDP('2%'),
    borderWidth: 1,
    borderColor: Colors1.black,
    width: widthPercentageToDP('14%'),
    height: heightPercentageToDP('7%'),
    margin: heightPercentageToDP('1%'),
    textAlign: 'center',
    fontSize: heightPercentageToDP('2%'),
  },
  
})

export default EnterOTP
