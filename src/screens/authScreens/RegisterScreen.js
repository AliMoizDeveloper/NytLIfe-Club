import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';

import React from 'react';
import ImageBackground from '../../components/CommonLayOut';
import {GlobalStyle} from '../../style/ExternalStyle';
import {Colors1, NavigationString, ImageString} from '../../constant/Constants';

import TransparentCard from '../../components/cards/CardConst';
import Input from '../../components/CustomFields';
import FlatButtons from '../../components/FlatsButtons';
import CustomTitle from '../../components/TitleHeader';
import CreateDivider from '../../components/DividerConst';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;


const RegisterScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

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

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
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

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
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
  
  return (
    <ImageBackground>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.registerAvatar}>
          <CustomTitle
            isRow={true}
            textRow1="Create"
            textRow2="Your Profile"
            fontWeight1={'bold'}
            fontSize1={24}
            fontSize2={24}
          />
          <Image
            source={ImageString.Avatar_ImageLog}
            style={styles.avatarReg}></Image>
        </View>
        <View style={styles.registerCard}>
          <TransparentCard>
            <Input
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              // label="Email"
              placeholder="Name"
              error={errors.email}
              style={styles.inputCustomField}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'fullname')}
              onFocus={() => handleError(null, 'fullname')}
              iconName="account-outline"
              // label="Email"
              placeholder="User Name"
              error={errors.fullname}
              style={styles.inputCustomField}
            />
            <Input
              keyboardType="numeric"
              onChangeText={text => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              iconName="phone-outline"
              // label="Email"
              placeholder="Phone Number"
              error={errors.phone}
              style={styles.inputCustomField}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              // iconName="lock-outline"
              // label="Password"
              placeholder="Enter your password"
              error={errors.password}
              style={styles.inputCustomField}
              justifyContent={'space-between'}
              password
            />
            <FlatButtons
              title={'Sign Up'}
              onPress={handleButtonPress}
              ColMargin={hp('2%')}
            />
          </TransparentCard>
        </View>
        <View style={styles.buttonSect}>
          <View style={styles.divider}>
            <CreateDivider />
            <Text style={{color: 'white'}}>OR</Text>
            <CreateDivider />
          </View>
          <View style={styles.btnRow}>
            <FlatButtons
              title={'FaceBook'}
              onPress={handleButtonPress}
              transparentBorder={true}
              WidthBtn={resWidth(150)}
              rtMarg={10}
              showIcon={true}
              iconSource={ImageString.Fb}
            />
            <FlatButtons
              title={'Google'}
              onPress={handleButtonPress}
              transparentBorder={true}
              WidthBtn={resWidth(150)}
              showIcon={true}
              iconSource={ImageString.Google_Logo}
            />
          </View>
          <View style={styles.Textloginbtn}>
            <Text style={styles.TextLogin}>Already Have An Account?</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(NavigationString.Login_Screen)
              }>
              <Text style={styles.Text12Bold}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // scrollViewContent:{flexGrow: 1,},
  scrollViewContent:{padding:hp('2%')},
  registerAvatar: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('2%'),
  },
  registerCard: {
    flex: 0.1,
    // backgroundColor:'lightgreen'
  },
  buttonSect: {
    flex: 1,
    marginTop: hp('2%'),
  },

  avatarReg: {
    marginTop: resHeight(10),
    height: screenWidth *0.3,
    width: screenWidth *0.3,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: resHeight(10),
    // backgroundColor:'pink'
  },
  btnRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor:'yellow'
  },
  Textloginbtn: {
    paddingTop: 5,
    paddingRight: resWidth(20),
    flexDirection: 'row',
    justifyContent:'center',
  },
  TextLogin: {
    color: 'white',
    fontSize: screenWidth*0.03,
  },
  Text12Bold: {
    paddingLeft: 2,
    fontWeight: 'bold',
    fontSize: screenWidth*0.03,
    color: Colors1.themeColor,
  },
  inputCustomField: {height: hp('6%'), fontSize: hp('2%'), flex:1},
});
export default RegisterScreen;
