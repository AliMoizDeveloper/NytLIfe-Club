import {Dimensions, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { Colors1, IconString } from '../constant/Constants';
import { resHeight, resWidth } from '../constant/WidthHeight';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const screenWidth = Dimensions.get('window').width;


const SearchAppBar = ({
  isLeftIcon,
  iconName,
  mrgrt,
  searchHeight,
  searchWidth,
  inputBackgroundColor,
  inputheight,
  error,
  rightIconImg,
  inputWidth,
  marginTop,
  isLeftAvatr,
  isRightIcon,
  justifyContent,
  alignItems,
  placeholder,
  onFocus = () => {},
  ...props
}) => {
  const leftIconStyle = {
    height: screenWidth*0.04,
    width: screenWidth*0.04,
    marginRight: mrgrt,
    //  color: Colors1.grey,
  };
  const inputContainer = {
    // color: Colors1.black,
    // backgroundColor:'red',
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    backgroundColor: inputBackgroundColor || Colors1.white, //'rgba(52, 52, 52, 0.3)'
   width:inputWidth,
    height: inputheight || 40,
    borderColor: error
      ? Colors1.red
      : isFocused
      ? Colors1.darkBlue
      : Colors1.light,
    alignItems: 'center',
    
  };
//   const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View
      style={{flex: 1, flexDirection: 'row', justifyContent: justifyContent ||'space-between',alignItems:alignItems,marginTop:marginTop}}>
{isLeftAvatr ||  <View
        style={{
          backgroundColor: 'white',
          width: (Dimensions.get('window').height>768)?heightPercentageToDP('4%'):heightPercentageToDP('4%'),
          height: heightPercentageToDP('4%'),
          borderRadius: resWidth(20),
        }}
      />}
      <View style={inputContainer}>
        {isLeftIcon && <Image source={iconName} style={leftIconStyle} />}
        <View style={{height:heightPercentageToDP('6%'),padding:1,justifyContent:'center'}}>
        <TextInput
          placeholder={placeholder}
          
          placeholderTextColor={Colors1.grey}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          
        //   secureTextEntry={hidePassword}
          style={{color: Colors1.white, }} //marginRight:'auto' in replacemnet of flex:1
          {...props}
        />
        </View>
      </View>
      {isRightIcon || <Image source={rightIconImg} style={{ height:resHeight(30),width:resWidth(30)}}/>}
    </View>
  );
};

export default SearchAppBar;

const styles = StyleSheet.create({
  placeHolderTextStyle:{
    color:Colors1.white,

  }
});
