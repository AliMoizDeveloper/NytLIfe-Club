import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Switch,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
// import {DrawerLayoutAndroid} from 'react-native';
import {
  Colors1,
  IconString,
  ImageString,
  NavigationString,
  ScreenWidth1,
} from '../constant/Constants';
import {resHeight, resWidth} from '../constant/WidthHeight';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BackgroundImage from '../components/CommonLayOut';


const DrawerNav = props => {
  const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const {onLogoutPress, closeDrawer, onChangeLanguagePress} = props;

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <BackgroundImage>
    <View style={Platform.OS=='ios'?styles.iosContainer: styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
           <Text style={styles.paragraph}>NITE LIFE</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            closeDrawer();
            // this._drawer && this._drawer.closeDrawer();
            navigation.navigate(NavigationString.EditProfile);
            // ()=>closeDrawer()
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.ProfileNavIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Profile</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.SettingScreen);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.PrivacyIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Privacy</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate(NavigationString.SettingScreen);
          drawer.current.closeDrawer();
        }}> */}
        <View style={styles.rowDrawerContent}>
          <Image
            source={IconString.SettingsIcon}
            style={styles.drawerIconContent}
          />
          <Text style={styles.drawerTextContent}>Notification</Text>
          <View style={Platform.OS==='ios' ?styles.iosSwitchBtnNot: styles.switchBtnNotification}>
            <Switch
              trackColor={{false: Colors1.grey, true: Colors1.themeColor}}
              thumbColor={isEnabled ? Colors1.themeColor : Colors1.grey}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }] }}
            />
          </View>
        </View>
        {/* </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.EditProfile);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.HelpSupportIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Help And Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.BlockingContent);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.ReportProbIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Report Problem</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.SupportInbox);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.SupportInboxIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Support Inbox</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.TermsAndPoicies);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.TermPolicyIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Term And Policies</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.OrderPayment);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.OrderPaymentIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Order</Text>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            closeDrawer();
            navigation.navigate(NavigationString.PaymentScr);
          }}>
          <View style={styles.rowDrawerContent}>
            <Image
              source={IconString.OrderPaymentIcon}
              style={styles.drawerIconContent}
            />
            <Text style={styles.drawerTextContent}>Payments</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </BackgroundImage>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iosContainer:{
    flex: 1,
    width: ScreenWidth1(1),
    paddingTop:heightPercentageToDP('3%'),
    paddingHorizontal:widthPercentageToDP('2%'),
    backgroundColor: Colors1.transparent,

  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal:widthPercentageToDP('2%'),
    backgroundColor: Colors1.transparent,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },

  paragraph: {
    color: Colors1.white,
    padding: 16,
    fontSize: heightPercentageToDP('4%'),
    fontWeight: 'bold',
    //   textAlign: 'center',
  },
  rowDrawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP('1.5%'),
    // marginRight:widthPercentageToDP('6%')
  },
  switchBtnNotification: { flex: 1},
  iosSwitchBtnNot:{
    flex:1,
    // backgroundColor:'red',
    marginLeft:ScreenWidth1(0.2),

    // paddingRight:widthPercentageToDP('30%'),
    },
  drawerIconContent: {width: resWidth(30), height: resHeight(35)},
  drawerTextContent: {
    color: Colors1.white,
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: '300',
    marginLeft: resWidth(10),
  },
});
export default DrawerNav;
