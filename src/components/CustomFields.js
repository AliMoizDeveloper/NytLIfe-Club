import React from 'react';
import {View, Text, TextInput, StyleSheet,Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors1, IconString, ImageString, ScreenWidth1} from '../constant/Constants';
import { resHeight, resWidth } from '../constant/WidthHeight';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
const Input = ({
  label,
  iconName,
  error,
  password,
  inputheight,
  inputwidth,
  isLeftIcon,
  searchHeight,
  searchWidth,
  mrgrt,
  inputBackgroundColor,
  leftIconColor,
  textColor,
  multiline,
  noLines,
  justifyContent,
  alignSelf,
  
  // fieldHeight,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  const leftIconStyle = {
    height:searchHeight||18,
    width:searchWidth||18,
     marginRight:mrgrt,
    //  color: Colors1.grey,
  }
  const inputContainer={
    borderRadius:12,
    backgroundColor: Colors1.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  }
  return (
    <View style={{}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          inputContainer,
          {
            backgroundColor:inputBackgroundColor || Colors1.white,//'rgba(52, 52, 52, 0.3)'
            height: inputheight || resHeight(40),
            width: inputwidth,
            borderColor: error
              ? Colors1.red
              : isFocused
              ? Colors1.darkBlue
              : Colors1.light,
            alignItems: 'center',
            justifyContent:justifyContent,
            alignSelf:alignSelf,
          },
        ]}>
       {isLeftIcon && (
       <Image
          source={iconName}
          style={leftIconStyle}
        />)}
        <TextInput
          multiline={multiline}
          numberOfLines={noLines}
        // selectionColor={Colors1.black}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: textColor ||Colors1.white , marginRight:'auto',flex:1 }}//marginRight:'auto' in replacemnet of flex:1 
          {...props}
        />
        {password && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} >
          <Image
            source={hidePassword ? IconString.Eye_Closed : IconString.Eye_Open}
            style={{
              height:ScreenWidth1(0.06),
              width:ScreenWidth1(0.06),
            }}
          />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: Colors1.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    // marginVertical: 5,
    fontSize: 14,
    color: Colors1.grey,
  },
  inputContainer: {
 
  },
});

export default Input;