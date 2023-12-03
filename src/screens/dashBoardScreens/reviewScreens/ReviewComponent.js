import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import TransparentCard from '../../../components/cards/CardConst';
import {resHeight, resWidth} from '../../../constant/WidthHeight';
import {Colors1, ImageString, ScreenWidth1} from '../../../constant/Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FlatButtons from '../../../components/FlatsButtons';

const screenWidth = Dimensions.get('window').width;


const ReviewComponent = ({
  reviewsData,
  isRow,
  isRightText,
  isTextColor,text
}) => {
  return (
    <TransparentCard>
      <View style={styles.transparentCard}>
        <View style={styles.cardAvatar}>
          <Image source={reviewsData.imageUrl} style={styles.imageAvatar} />
        </View>
        <View style={{flexDirection: isRow ? 'row' : 'column', flex: 1}}>
          <View style={styles.cardText}>
            <Text style={[textReview.textReview, {fontWeight: 'bold'}]}>
              {reviewsData.title}
            </Text>
            {reviewsData.message && (
              <Text style={[textReview.textReview, {fontSize: hp('1.5%')}]}>
                {reviewsData.message}
              </Text>
            )}
            {reviewsData.star && (
              <Text style={textReview.textReview}>{reviewsData.star}</Text>
            )}
            {reviewsData.Date && (
              <Text style={[textReview.textReview, {fontSize: hp('1.5%')}]}>
                {reviewsData.Date}
              </Text>
            )}
            {reviewsData.price && (
              <Text style={[textReview.textReview, {fontSize: hp('1.7%')}]}>
                {reviewsData.price}
              </Text>
            )}
            {reviewsData.event && (
              <Text style={[textReview.textReview, {fontSize: hp('1.5%')}]}>
                {reviewsData.event}
              </Text>
            )}
          </View>
          {isRightText && (
            <View
              style={styles.pendingView}>
              <View
                style={[textReview.pendingText,{backgroundColor: isTextColor}]}>
                <Text style={{color: Colors1.white, fontSize:screenWidth*0.025}}>{text}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </TransparentCard>
  );
};

export default ReviewComponent;

const styles = StyleSheet.create({
  transparentCard: {
    flexDirection: 'row',
  },
  imageAvatar: {
    height: ScreenWidth1(0.25),
    width: ScreenWidth1(0.25),
    borderRadius:hp('10%'),
    marginRight: resWidth(5),
    resizeMode: 'cover',
  },
  cardText: {
    flex: 1,
    paddingRight: resWidth(10),
  },
  pendingView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('15%'),
  }
});

const textReview = StyleSheet.create({
  textReview: {
    color: Colors1.white,
  },
  pendingText: {
    borderRadius:hp('1%'),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Colors1.red,
    width:wp('16%'),
    height:hp('3.9%'),
    paddingBottom:hp('0.2%')
  },

});
