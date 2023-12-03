import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
// import { CheckBox } from '@rneui/themed';
import FlatButtons from '../../components/FlatsButtons';
import BackgroundImage from '../../components/CommonLayOut';
import Input from '../../components/CustomFields';
import CreateDivider from '../../components/DividerConst';
import {NavigationString, Colors1, ImageString, FontSizes} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import CheckBox from 'react-native-check-box';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { HeaderTitle } from '../../style/ExternalStyle';

const screenWidth = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  const [isSelected, setSelection] = useState(false);
  const widths = 150;

  return (
    <BackgroundImage >
      <SafeAreaView >
        <View style={styles.contentAvatar}>
          <Text style={styles.loginText}>Wellcome Back!</Text>
          <View style={{padding: resHeight(10)}} />
          <Text style={{color: Colors1.grey, fontSize:resWidth(12)}}>
            Glad to see you back! Enter your email address and password to log
            in to your account.
          </Text>
          <View style={{padding: resHeight(10)}} />
          <Text style={{color: Colors1.grey,fontSize:resWidth(12)}}>Email</Text>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            // label="Email"
            placeholder="example@gmail.com"
            error={errors.email}
            style={{height:resHeight(50),flex:1}}
          />
          <View style={{padding: 10}}></View>
          <Text style={{color: Colors1.grey,fontSize:resWidth(12)}}>Password</Text>

          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            password
            // label="Email"
            placeholder="Password"
            error={errors.password}
            style={{height:resHeight(50),flex:1}}
          />
          <View style={styles.rememberForgotContainer}>
            <View style={styles.checkbox}>
              <CheckBox
                isChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                rightText={'Remember Me'}
                rightTextStyle={{color: Colors1.white,fontSize:resWidth(12)}}
                uncheckedCheckBoxColor={Colors1.white}
                checkBoxColor={Colors1.themeColor}
              />
            </View>
            <View style={styles.forgotPassContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(NavigationString.Recover_Pass)
                }>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{padding: resHeight(10)}} />
          <FlatButtons
          btnTxtSize={FontSizes.btnTxt20}
            title={'Sign In'}
            onPress={() =>
              navigation.navigate(NavigationString.Bottom_Controller)
            }
          />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.divider}>
              <CreateDivider />
              <Text style={{color: 'white',fontSize:resWidth(12)}}>OR</Text>
              <CreateDivider />
            </View>
            <View style={styles.socialClicks}>
              <FlatButtons
              btnTxtSize={FontSizes.btnTxt20}
                title={'FaceBook'}
                onPress={() =>
                  navigation.navigate(NavigationString.SettingScreen)
                }
                showIcon={true}
                iconSource={ImageString.FaceBook_Logo}
                transparentBorder={true}
                WidthBtn={resWidth(150)}
              />
              <View style={{padding: resWidth(10)}}></View>
              <FlatButtons
              btnTxtSize={FontSizes.btnTxt20}
                title={'Google'}
                onPress={handleButtonPress}
                showIcon={true}
                iconSource={ImageString.Google_Logo}
                transparentBorder={true}
                WidthBtn={resWidth(150)}
              />
            </View>
          </View>
          <View style={{padding: 10}}></View>
          <View style={styles.Textloginbtn}>
            <Text style={styles.TextLogin}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationString.Register_Screen)
              }>
              <Text style={styles.Text12Bold}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  contentAvatar: {
    paddingTop:hp('2%'),
    paddingHorizontal:wp('4%')
    // alignItems: 'center',
    // paddingBottom: resHeight(10),

    // flexDirection: 'column',
  },
  socialClicks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'gray',
    // padding:10
    // alignItems:'center'
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingLeft: resWidth(10),
    marginVertical:screenWidth *0.03,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    flex: 1,
    marginVertical: resHeight(15),
    // backgroundColor:Colors1.blue,
    // width: 350,
    // height: 50,
  },
  forgotPassContainer: {
    flex: 1,
    marginVertical: resHeight(15),
    // backgroundColor:Colors1.darkBlue,
    alignItems: 'flex-end',
  },

  forgotText: {
    color: 'white',
    fontSize:resWidth(12)
    // paddingLeft: 45,
    // marginTop: 15,
  },
  loginText: {
    fontSize: FontSizes.FS30,
    fontWeight: 'bold',
    color: 'white',
    
  },

  Textloginbtn: {
    paddingTop: resHeight(8),
    paddingRight: resWidth(20),
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  TextLogin: {color: Colors1.white,fontSize:FontSizes.FS14},
  Text12Bold: {
    paddingLeft: resWidth(2),
    fontWeight: 'bold',
    color: Colors1.themeColor,
    fontSize:FontSizes.FS14
    // color: "white"
  },
});

export default LoginScreen;
