import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {Colors1, FontSizes} from '../constant/Constants';
import {resHeight, resWidth} from '../constant/WidthHeight';

const FlatButtons = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  disabled,
  transparentBorder,
  ColMargin,
  rtMarg,
  WidthBtn,
  iconSource,
  showIcon,
  buttonpad,
  buttonHeight,
  btnTxtSize
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          marginRight: rtMarg,
          width: WidthBtn,
          marginVertical: ColMargin,
          padding: buttonpad || 18,
          backgroundColor: backgroundColor || Colors1.themeColor,
          height:buttonHeight,
        },
        disabled && styles.disabledButton,
        transparentBorder && styles.borderWidth,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {showIcon && <Image resizeMode='contain' source={iconSource} style={styles.iconStyle} />}
        <Text style={[styles.buttonText, {color: textColor || '#fff',fontSize:btnTxtSize || FontSizes.btnTxt20}]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: resHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: resWidth(16),
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
  borderWidth: {
    backgroundColor: 'transparent',
    padding: resHeight(18),
    // flexDirection:'column',
    // justifyContent:'space-around',
    alignItems: 'center',
    borderColor: Colors1.white,
    borderWidth: 1,
    borderRadius: resHeight(15),
  },
  iconStyle: {
    height: resHeight(25),
    width: resWidth(20),
    marginRight: resWidth(5),
  },
});

export default FlatButtons;
