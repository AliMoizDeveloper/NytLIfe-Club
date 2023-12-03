import { Alert, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react';
import { Colors1, IconString, ImageString, NavigationString } from '../../constant/Constants';
import ImageBackground from '../../components/CommonLayOut';
import { resHeight, resWidth } from '../../constant/WidthHeight';
import TitleHeading from '../../components/TitleAppBarIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import TransparentCard from '../../components/cards/CardConst';
import Input from '../../components/CustomFields';
import FlatButtons from '../../components/FlatsButtons';

const SettingScreen = ({navigation}) => {
  const [oldPasstext, setText] = useState('');
  const [cnfrmPasstext, setcrnfmText] = useState('');
  const [newPasstext, setnewText] = useState('');

  const showAlert = () => {
    Alert.alert(
      'Password Changed',
      'Password has been Changed.',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <ImageBackground justifyContent={'flex-start'}>
      <View style={styles.AppBar}>
      <TitleHeading
      isText={true}
      title={'Privacy'}
      fontWeight={'500'}
      fontSize={heightPercentageToDP('2.5%')}
          isrightIcon1={true}
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          // fontWeight={'bold'}
          pressIconleft={() => navigation.goBack()}
        />
      </View>
      <View style={[styles.container]}>
      <TransparentCard>
            <Input
              onChangeText={oldPasstext => setText(oldPasstext)}
              value={oldPasstext}
              // onFocus={() => handleError(null, 'email')}
              // iconName="email-outline"
              // label="Email"
              placeholder="Old Password"
              // error={errors.email}
              style={styles.inputCustomField}
            />
            <Input
              onChangeText={cnfrmPasstext => setcrnfmText(cnfrmPasstext)}
              value={cnfrmPasstext}
              // iconName="account-outline"
              // label="Email"
              placeholder="Confirm Password"
              // error={errors.fullname}
              style={styles.inputCustomField}
            />
            <Input
              onChangeText={newPasstext => setnewText(newPasstext)}
              value={newPasstext}
              // iconName="phone-outline"
              // label="Email"
              placeholder="New Password"
              // error={errors.phone}
              style={styles.inputCustomField}
            />
            <FlatButtons
              title={'Save'}
              onPress={showAlert}
              ColMargin={heightPercentageToDP('2%')}
            />
          </TransparentCard>


            
        </View>
    </ImageBackground>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  AppBar: {
    // flex:1,
    marginTop: heightPercentageToDP('4%'),
    // marginBottom:resHeight(20),
    padding:heightPercentageToDP('2%')
  },
  container: {
    padding: resHeight(40),
  },

  paragraph: {
      color:Colors1.white,
    padding: 16,
    fontSize: 25,
    fontWeight:'bold'
  //   textAlign: 'center',
  },
  rowDrawerContent:{flexDirection:'row',alignItems:'center',paddingVertical:resHeight(10)},
  drawerIconContent:{width:resWidth(30),height:resHeight(30)},
  drawerTextContent:{color:Colors1.white,fontSize:resWidth(22),fontWeight:'300',marginLeft:resWidth(10)},
  inputCustomField: {height: heightPercentageToDP('6%'), fontSize: heightPercentageToDP('2%')},
})