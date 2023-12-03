import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import BackgroundImage from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import FlatButtons from '../../components/FlatsButtons';
import Input from '../../components/CustomFields'

import {
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
  ScreenWidth1,
} from '../../constant/Constants';
import { resHeight, resWidth } from '../../constant/WidthHeight';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from '../../style/ExternalStyle';


const WalletWithdraw = ({navigation}) => {

  const screenWidth = Dimensions.get('window').width;
 
    const [inputs, setInputs] = React.useState({
        amount: '',
      });   
      const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      
  return (
    <BackgroundImage justifyContent={'flex-start'}>
      {/* <SafeAreaView >  */}
    <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
      <TitleHeading
        isleftIcon={true}
        isText={true}
        isrightIcon1={true}
        leftIcon1={IconString.Go_Back}
        pressIconleft={() =>
          navigation.goBack()
        }
        fontWeight={'bold'}
      />
    {/* </View> */}

    <View style={{    
      // marginTop: hp('1%'),
      //     marginStart: wp('14%'),
      //     marginEnd:wp('14%')
          }}>
   <View style={{flexDirection:'row', alignItems:'center'}}>
   <Text
            style={{
              color: 'white',
              fontSize: hp('2%')
            }}>
            Your Balance
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: hp('2.5%'),
              fontWeight: 'bold',
              marginLeft: 'auto',
            }}>
            11,250.00 $
          </Text>
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: hp('3%'),
            marginTop: hp('4.5%'),
            fontWeight: 'bold',
          }}>
          Withdraw
        </Text>
        <View style={{marginTop: hp('2.5%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('1.8%'),
          }}>
          Amount
        </Text>
        <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            inputheight={hp('6%')}
            textColor={'black'}   
            placeholder={'Enter Amount to withdraw'}
          />
        </View>
    </View>
    <View
      
      style={{
        marginTop: hp('3%'),
       alignSelf:'center'
      }}>
      <Image
        style={{
          height: screenWidth *0.55,  
          width: screenWidth *0.9,
          borderRadius: 12,}}
        source={require('../../../assets/images/card-front.png')}
      />
      <Text
        style={{   color: 'white',
        position: 'absolute',
        top: screenWidth < 768 ? hp('10%') : hp('19%'),
        left: resWidth(10),
        fontSize: hp('2.5%'),}} >
        Current Balance 
      </Text>
      <Text
        style={{  color: 'white',
        position: 'absolute',
        top: screenWidth < 768 ? hp('14%') : hp('23.2%'),
        left: resWidth(10),
        fontWeight:'bold',
        fontSize: hp('2.5%'),}}>
        $ 5,750
      </Text>
    </View>
    
    <View style={{
      marginTop:  hp('3%'), 
      alignSelf: 'center'}}>
      <FlatButtons
        title="Send My Request"
        WidthBtn={ScreenWidth1(0.9)}
        buttonHeight={hp('6.5%')}
        btnTxtSize={FontSizes.btnTxt20}
        buttonpad={1}
      />
    </View>
    <View style={{marginTop: 15, alignSelf: 'center'}}>
      <FlatButtons
        title="Cancel"
        WidthBtn={ScreenWidth1(0.9)}
        buttonHeight={hp('6.5%')}
        transparentBorder={true}
        btnTxtSize={FontSizes.btnTxt20}
        buttonpad={1}
      />
    </View>
    </View>
    {/* </SafeAreaView> */}
  </BackgroundImage>
  
  )
}

export default WalletWithdraw

const styles = StyleSheet.create({})