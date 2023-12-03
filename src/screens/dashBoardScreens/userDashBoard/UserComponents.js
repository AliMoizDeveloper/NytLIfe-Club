import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity, Platform } from 'react-native'
import React ,{useState} from 'react'
import { resHeight, resWidth } from '../../../constant/WidthHeight'
import BackgroundImageText from '../../../components/BackgroundImageText'
import FlatButtons from '../../../components/FlatsButtons'
import { Colors1, FontSizes, ImageString, ScreenWidth1 } from '../../../constant/Constants'
import CustomTitle from '../../../components/TitleHeader'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const BookingCards =()=>{
  return(
    <BackgroundImageText
    cardHeight={hp('12%')}
    cardWidth={wp('90%')}
    resizeImg={'cover'}
    borderRad={hp('2%')}
    img={ImageString.Club_DashBoard_Biding}>
    <View
      style={bookingCardStyle.cardStyle}>
      <CustomTitle
        isRow={false}
        textColumn1={'Bidding'}
        textColumn2={'Overview'}
        fontSize1={FontSizes.FS30}
        fontSize2={FontSizes.FS30}
        fontWeight1={'bold'}
        fontWeight2={'bold'}
      />
    </View>
  </BackgroundImageText>
  )
}


const CorouselComponents = ({pressUploadJob,pressEdit,pressViewJobs}) => {
  return (
    <View style={coroselStyles.corouselCard}>
    <BackgroundImageText
      img={ImageString.Club_DashBoard_BackImage}
      cardHeight={hp('35%')}
      cardWidth={wp('90%')}
      borderRad={resWidth(25)}>
      <View style={coroselStyles.coroselContainer}>
        
        <View style={coroselStyles.coroselEditIcon}>
        <TouchableOpacity onPress={pressEdit}>
          <Image
            source={ImageString.Edit_Icon}
            style={coroselStyles.coroselEditImage}
          />
          </TouchableOpacity>
        </View>
        
        <View style={coroselStyles.textContent}>
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
              title={'Upload Jobs'}
              onPress={pressUploadJob}
              WidthBtn={wp('25%')}
              buttonHeight={resHeight(35)}
              buttonpad={1}
              btnTxtSize={FontSizes.btnTxt18}
            />
            <FlatButtons
              title={'View Jobs'}
              onPress={pressViewJobs}
              WidthBtn={wp('25%')}
              buttonHeight={resHeight(35)}
              buttonpad={1}
              btnTxtSize={FontSizes.btnTxt18}
            />
          </View>
        </View>
      </View>
    </BackgroundImageText>
  </View>
  )
}
const bookingCardStyle = StyleSheet.create({
  cardStyle:{
    position: 'absolute',
    top: resHeight(20),
    left: resWidth(12),
  }
})


const coroselStyles = StyleSheet.create({
    corouselCard: {
      // backgroundColor:'red',
        paddingTop: resHeight(15),
        justifyContent: 'center',
        alignItems: 'center',
      },
      coroselContainer: {
        flex: 1,
        width:wp('90%'),
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: resWidth(25),
        position: 'relative',
      },
      coroselEditIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        width: wp('10%'),
        height: hp('6%'),
        // backgroundColor:'red'
      },
      coroselEditImage: {
        height: ScreenWidth1(0.06),
        width: ScreenWidth1(0.06),
      },
      textContent: {
        marginLeft: resWidth(20),
        marginBottom: resHeight(20),
        // backgroundColor:'red',
        width: wp('55%'),
        height: hp('12%'),
        bottom: 0,
        // backgroundColor:'red',
        position: 'absolute',
      },
      text1: {
        color: Colors1.white,
      },
      textPopular: {
        fontSize: FontSizes.FS18,
      },
      textNightClub: {
        fontSize: FontSizes.FS25,
      },
      rowButton: {
        paddingTop: 10,
        flexDirection: 'row',
        // alignItems:'flex-start',
        justifyContent: 'space-between',
        // alignContent: 'center',
      },


})


export {CorouselComponents,
  BookingCards} 


