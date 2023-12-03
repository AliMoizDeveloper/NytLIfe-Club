import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Image, Platform} from 'react-native';
import BackgroundImage from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import FlatButtons from '../../components/FlatsButtons';
import CustomDropdown from '../../components/Dropdown';
import {
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
  ScreenWidth1,
} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from '../../style/ExternalStyle';




const Wallet = ({navigation}) => {

  const screenWidth = Dimensions.get('window').width;

  const options = [
    {id: '1', label: 'Option 1', value: 'Option 1'},
    {id: '2', label: 'Option 2', value: 'Option 2'},
    {id: '3', label: 'Option 3', value: 'Option 3'},
  ];

  const options1 = [
    {id: '1', label: 'Option 1', value: 'Option 1'},
    {id: '2', label: 'Option 2', value: 'Option 2'},
    {id: '3', label: 'Option 3', value: 'Option 3'},
  ];

  const handleOptionSelect = selectedValue => {
    console.log(`Selected: ${selectedValue}`);
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
    {/* <SafeAreaView style={HeaderTitle.container}> */}
    <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <TitleHeading
          isleftIcon={true}
          isText={true}
          isrightIcon1={true}
          title={'Wallet'}
          leftIcon1={IconString.Go_Back}
          pressIconleft={() => navigation.goBack()}
          fontWeight={'bold'}
        />
      

      <View
        style={{
           marginTop: hp('5%'),
           alignSelf:'center'
          
        }}>
        <Image
          style={{
            height: screenWidth *0.55,  
            width: screenWidth *0.9,
            borderRadius: 12}}
          source={require('../../../assets/images/card-front.png')}
        />
        <Text
          style={{   color: 'white',
          position: 'absolute',
          top: screenWidth < 768 ? hp('10%') : hp('19%'),
          left: wp('3%'),
          fontSize: hp('2.5%')}} >
          Current Balance 
        </Text>
        <Text
          style={{  color: 'white',
          position: 'absolute',
          top: screenWidth < 768 ? hp('14%') : hp('23.2%'),
          left: wp('3%'),
          fontWeight:'bold',
          fontSize: hp('2.5%'),}}>
          $ 5,750
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* <View style={styles.buttonWrapper}> */}
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.WalletDeposit)}
            title="Deposit"
            WidthBtn={screenWidth *0.45}
            buttonHeight={hp('5%')}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
        {/* </View> */}
        {/* <View style={{width: wp('2%')}} /> */}
        {/* <View style={styles.buttonWrapper}> */}
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.WalletWithdraw)}
            title="Withdraw"
            WidthBtn={screenWidth *0.45}
            buttonHeight={hp('5%')}
            backgroundColor={'grey'}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
        {/* </View> */}
      </View>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          options={options}
          onSelect={handleOptionSelect}
          textColor={'white'}
          border_color={'transparent'}
          border_padding={wp('1%')}
          WidthBtn={ScreenWidth1(0.99)}
          title={'View Pending Credit'}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <CustomDropdown
          options={options1}
          onSelect={handleOptionSelect}
          textColor={'white'}
          border_color={'transparent'}
          border_padding={wp('1%')}
          WidthBtn={ScreenWidth1(0.99)}
          title={'View Received Credit'}
        />
      </View>
      <View style={styles.okayButtonContainer}>
        <FlatButtons
          title="Okay"
          WidthBtn={ScreenWidth1(0.9)}
          buttonHeight={hp('6.5%')}
          btnTxtSize={FontSizes.btnTxt20}
          buttonpad={1}
        />
      </View>
      {/* </SafeAreaView> */}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({

  currentBalanceText: {
    color: 'white',
    position: 'absolute',
    top: resHeight(100),
    left: resWidth(10),
    fontSize: hp('2.5%'),
    },
  balanceAmount: {
    color: 'white',
    position: 'absolute',
    top: resHeight(130),
    left: resWidth(10),
    fontWeight:'bold',
    fontSize: hp('2.5%'),
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: resHeight(30),
    justifyContent:'space-between',
    // backgroundColor:'pink',
    width: ScreenWidth1(0.92),
    
  },
  buttonWrapper: {
    backgroundColor:'red',
    
  },
 
  dropdownContainer: {
    // marginTop: 20,
    // alignSelf: 'center',
    // backgroundColor:'red'
  },
  okayButtonContainer: {
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default Wallet;
