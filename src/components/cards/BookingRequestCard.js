import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FlatButtons from '../FlatsButtons';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {Colors1, FontSizes} from '../../constant/Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;

const BookingRequestCard = ({
  justifyContentbtn,
  isRightBtn,
  imgAvatar,
  title,
  description,
  description1,
  description2,
  onButton1Press,
  onButton2Press,
  buttonText1,
  buttonText2,
  buttonpad1,
  buttonpad2,
  WidthBtn1,
  WidthBtn2,
  buttonHeight1,
  buttonHeight2
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <Image source={imgAvatar} style={styles.avatar} />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{description1}</Text>
        <Text style={styles.description}>{description2}</Text>
        <View
          style={[
            styles.buttonContainer,
            {
              justifyContent: justifyContentbtn || 'space-around',
            },
          ]}>
          <FlatButtons
            onPress={onButton1Press}
            title={buttonText1}
            buttonpad={buttonpad1}
            WidthBtn={WidthBtn1}
            buttonHeight={buttonHeight1}
          />
          {isRightBtn && (
            <FlatButtons
              onPress={onButton2Press}
              title={buttonText2}
              buttonpad={buttonpad2}
              backgroundColor={Colors1.grey}
              WidthBtn={WidthBtn2}
              buttonHeight={buttonHeight2}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 8,
    // margin: 10,
    padding: 5,
    marginTop:10,
    // backgroundColor: 'white',
  },
  leftContent: {
    flex: 1.5,
    // backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContent: {
    flex: 3,
    marginLeft: wp('2%'),
    // backgroundColor:'red',
  },
  avatar: {
    height: screenWidth*0.3,
    width: screenWidth*0.3,
    borderRadius: hp('50%'),
    marginRight:wp('2%')
  },
  title: {
    fontSize: FontSizes.FS20,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    // marginTop: 5,
    fontSize: FontSizes.FS15,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:screenWidth*0.02,
    // marginTop: 10,
  },
});

export default BookingRequestCard;
