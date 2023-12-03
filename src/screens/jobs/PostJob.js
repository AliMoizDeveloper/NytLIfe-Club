import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import ImageBackground from '../../components/CommonLayOut';
import CustomTitle from '../../components/TitleHeader';
import TransparentCard from '../../components/cards/CardConst';
import Input from '../../components/CustomFields';
import FlatButtons from '../../components/FlatsButtons';
import {Colors1, FontSizes, IconString, ImageString} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import TitleHeading from '../../components/TitleAppBarIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { HeaderTitle } from '../../style/ExternalStyle';
import BackgroundImage from '../../components/CommonLayOut';
// import DateInputField from '../../components/datePickerModel';

const PostJob = ({navigation}) => {


  const inputStyle={fontSize:wp('3%'),height:hp('8%')}

  const [inputs, setInputs] = React.useState({
    salary: '',
    expertise: '',
  });
  //   const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.salary) {
      handleError('Please input salary', 'salary');
      isValid = false;
    }

    if (!inputs.expertise) {
      handleError('Please input expertise', 'expertise');
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
        // navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  return (
    <BackgroundImage>
    <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <View style={styles.AppBar}>
        <TitleHeading
          isrightIcon1={true}
          title={'Post Jobs'}
          fontSize={FontSizes.FS25}
          isText={true}
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          fontWeight={'bold'}
          pressIconleft={() => navigation.goBack()}
        />
      </View>
      <View style={styles.postJobContainer}>
    
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.registerCard}>
          <TransparentCard cardHorizontal={1}>
            <Input
              onChangeText={text => handleOnchange(text, 'salary')}
              textColor={Colors1.black}
              placeholder="Salary"
              style={inputStyle}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'expertise')}
              // onFocus={() => handleError(null, 'fullname')}
              // iconName="account-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Expertise"
              style={inputStyle}
              // error={errors.fullname}
            />
            
      {/* <DateInputField placeHolder={'Date'}/> */}

            <Input
              onChangeText={text => handleOnchange(text, 'phone')}
              // onFocus={() => handleError(null, 'fullname')}
              // iconName="account-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Contact Number"
              style={inputStyle}
              // error={errors.fullname}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'jobDis')}
              inputheight={resHeight(100)}
              multiline={true}
              noLines={5}
              style={inputStyle}
              // onFocus={() => handleError(null, 'salary')}
              // iconName="email-outline"
              // label="Email"
              textColor={Colors1.black}
              placeholder="Job Discription"
              // error={errors.email}
            />
            <FlatButtons
              title={'Save'}
              onPress={handleButtonPress}
              ColMargin={10}
            />
          </TransparentCard>
        </View>
      </ScrollView>
      </View>
    </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({

  AppBar: {
  //  marginTop:20
  },
  // scrollViewContent:{flexGrow: 1,},

  registerCard: {
    flex: 1,
    paddingTop: hp('2%'),
    // backgroundColor:'lightgreen'
  },
  postJobContainer:{
    // padding:hp('2%')
  }
});
export default PostJob;
