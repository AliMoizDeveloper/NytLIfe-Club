import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {Colors1, FontSizes, ScreenWidth1} from '../../constant/Constants';
import FlatButtons from '../FlatsButtons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CarouselCardSlider = ({data}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      activeDotColor={Colors1.themeColor}
      dotColor={Colors1.grey}
      loop={false}>
      {data.map(item => (
        <View style={styles.slide} key={item.id}>
          <View style={styles.card}>
            <Image
            resizeMode='stretch'
              source={item.image}
              style={{
                backgroundColor:'red',
                height: ScreenWidth1(0.6),
                width: ScreenWidth1(0.83),
                borderRadius: 12,
              }}
            />

            <View
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: Colors1.white,
                height: ScreenWidth1(0.6),
                width: ScreenWidth1(0.83),
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
              <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
                Popular Club
              </Text>
              <Text style={[coroselStyles.text1, coroselStyles.textNightClub]}>
                XS NightClub
              </Text>
              <Text style={[coroselStyles.text1, coroselStyles.textPopular]}>
                4.1 Stars
              </Text>
              <View style={coroselStyles.rowButton}>
                <FlatButtons
                  title={'View Profile'}
                  WidthBtn={ScreenWidth1(0.3)}
                  buttonHeight={hp('5%')}
                  buttonpad={1}
                  btnTxtSize={FontSizes.btnTxt18}
                />
              </View>
            </View>
          </View>
        </View>
      ))}
    </Swiper>
  );
};
const coroselStyles = StyleSheet.create({
  text1: {
    color: Colors1.white,
  },
  textPopular: {
    fontSize: FontSizes.FS20,
  },
  textNightClub: {
    fontSize: FontSizes.FS30,
  },
  rowButton: {
    paddingTop: hp('2%'),
    flexDirection: 'row',
    // alignItems:'flex-start',
    // alignContent: 'center',
  },
  imageOverlay: {},
});
const styles = StyleSheet.create({
  slide: {
    margin: hp('2%'),
  },
  card: {
    position: 'relative',
    shadowColor: '#000',
    alignItems: 'center',
  },
});

export default CarouselCardSlider;
