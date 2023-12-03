import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/CommonLayOut'
import { GlobalStyle } from '../../style/ExternalStyle'
import TitleHeading from '../../components/TitleAppBarIcons'
 import TransparentCard from '../../components/cards/CardConst'
import Input from '../../components/CustomFields'
import FlatButtons from '../../components/FlatsButtons';
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Colors1 } from '../../constant/Constants'


const CreatePassword = () => {
  const handleButtonPress = () => {
    // navigation.navigate('RegisterScreen');
    // Handle button press here
    console.log('Button pressed');
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  return (
    // 
    
        <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={styles.container1}>
        <TitleHeading title={'Create New Password'} fontSize={heightPercentageToDP('3%')} fontWeight={'bold'} isText={true}/>
        <TransparentCard>
        <Text style={{color:'white',fontSize:heightPercentageToDP('2%')}}>Enter Your E-mail or Phone Number to recover your Password</Text>
        <Input
            onChangeText={text => handleOnchange(text, 'password')}
            // onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="password"
            // error={errors.password}
            password
            justifyContent={'space-between'}
            style={{height:heightPercentageToDP('6%'),color:Colors1.black,flex:1}}
          />
           <Input
            onChangeText={text => handleOnchange(text, 'password')}
            // onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            // label="Password"
            placeholder="Confirm password"
            // error={errors.password}
            password
            style={{height:heightPercentageToDP('6%'),color:Colors1.black,flex:1}}
          />
          <View style={styles.container2}>
          <FlatButtons title={'Reset Password'} onPress={handleButtonPress}/>

          </View>
        </TransparentCard>
        </View>
          
      </View>

        </BackgroundImage>
    // 
  )
}

const styles = StyleSheet.create({
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },container2:{
    paddingTop:10,
  }
  
})

export default CreatePassword