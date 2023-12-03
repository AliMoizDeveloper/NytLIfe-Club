import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions, Platform} from 'react-native';
import BackgroundImage from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import FlatButtons from '../../components/FlatsButtons';
import Input from '../../components/CustomFields';

import {
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
  ScreenWidth1,
} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { HeaderTitle } from '../../style/ExternalStyle';


const WalletDeposit = ({navigation}) => {

  const screenWidth = Dimensions.get('window').width;

  const [inputs, setInputs] = React.useState({
    amount: '',
    name:'',
  });
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
      <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
      {/* <View style={{marginTop: 50, paddingStart:50}}> */}
        <TitleHeading
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          pressIconleft={() => navigation.goBack()}
          fontWeight={'bold'}
        />
      {/* </View> */}

      <View
        style={{
          marginTop: hp('1%'),
          // marginStart: resWidth(60),
          // marginEnd: resWidth(60),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            fontSize: FontSizes.FS30,
            marginTop: hp('3.5%'),
            fontWeight: 'bold',
          }}>
          Deposit
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: FontSizes.FS17,
            marginTop: hp('2.5%'),
          }}>
          Choose Your Amount
        </Text>
        <View style={{flexDirection: 'row', marginTop: hp('2.2%')}}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="500 $"
            WidthBtn={ScreenWidth1(0.45)}
            buttonHeight={hp('7%')}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
          <View style={{width: wp('4%')}} />
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="250 $"
            WidthBtn={ScreenWidth1(0.45)}
            buttonHeight={hp('7%')}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: hp('2.5%')}}>
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="100 $"
            WidthBtn={ScreenWidth1(0.45)}
            buttonHeight={hp('7%')}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
          <View style={{width:wp('4%')}} />
          <FlatButtons
            onPress={() => navigation.navigate(NavigationString.Wallet)}
            title="50 $"
            WidthBtn={ScreenWidth1(0.45)}
            buttonHeight={hp('7%')}
            backgroundColor={'transparent'}
            transparentBorder={true}
            btnTxtSize={wp('3%')}
            buttonpad={1}
          />
        </View>
        <View style={{marginTop: hp('2.5%')}}>
        <Text
          style={{
            color: 'white',
            fontSize: hp('1.8%'),
          }}>
          Card Number
        </Text>
        <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            inputheight={hp('6%')}
            textColor={'black'}   
            placeholder={'Enter Card Number'}
          />
           <Text
          style={{
            color: 'white',
            fontSize: hp('1.8%'),
            marginTop:hp('2.5%')
          }}>
          Name
        </Text>
        <Input
            // onChangeText={text => handleOnchange(Name, 'name')}
            inputheight={hp('6%')}
            textColor={'black'} 
            placeholder={'Enter Name'}  
          />
        </View>
        <View style={{flexDirection:'row', marginTop:hp('1%')
}}>
       
        <View>
        <Text
          style={{
            color: 'white',
            fontSize: hp('1.8%'),
            marginTop:hp('2.4%')

          }}>
          Expiry Date
        </Text>
        <Input
            onChangeText={text => handleOnchange(Number, 'amount')}
            inputheight={hp('6.6%')}
            textColor={'white'}  
            inputwidth={ScreenWidth1(0.45)} 
            inputBackgroundColor={'transparent'}
            placeholderTextColor="white" 
            placeholder={'10/12'}
          />
        </View>
        <View style={{width: wp('3%')}} />

        <View>
        <Text
          style={{
            color: 'white',
            fontSize: hp('1.8%'),
            marginTop:hp('2.4%')
          }}>
          CVC
        </Text>
        <Input
            // onChangeText={text => handleOnchange(Name, 'name')}
            inputheight={hp('6.6%')}
            textColor={'white'}  
            inputwidth={ScreenWidth1(0.45)} 
            placeholder={'123'}  
            placeholderTextColor="white" 
            inputBackgroundColor={'#1E89A0'}
          />
        </View>
        </View>
       
      </View>      
      </View>
    </BackgroundImage>
  );
};

export default WalletDeposit;

const styles = StyleSheet.create({});
