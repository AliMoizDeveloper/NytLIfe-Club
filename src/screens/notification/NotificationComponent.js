import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import TransparentCard from '../../components/cards/CardConst';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import {Colors1, ImageString} from '../../constant/Constants';
import FlatButtons from '../../components/FlatsButtons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const screenWidth = Dimensions.get('window').width;

const NotificationComponent = ({notificationsData, isbtn}) => {


  return (
    <TransparentCard>
      <View style={styles.container}>
        <View>
          <Image
            style={{height: screenWidth < 768 ? hp('10%') : hp('12%'),
            width: screenWidth < 768 ? hp('10%') : hp('12%'),
            marginRight: wp('4%'),
            resizeMode: 'contain',}}
            source={notificationsData.imageUrl}
          />
        </View>
        <View style={styles.cardText}>
          <View style={styles.titleRow}>
            <Text style={styles.titleText}>{notificationsData.title}</Text>
            <View style={styles.timestampContainer}>
              <Text style={styles.timestampText}>
                {notificationsData.timestamp}
              </Text>
              <Image
                style={styles.threeDotsIcon}
                source={ImageString.Three_Dots}
              />
            </View>
          </View>
          <Text style={styles.messageText}>{notificationsData.message}</Text>
          {isbtn && (
            <FlatButtons
              title="Add a Review"
              WidthBtn={wp('33%')}
              buttonHeight={hp('5%')}
              btnTxtSize={wp('3%')}
              buttonpad={1}
            />
          )}
        </View>
      </View>
    </TransparentCard>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  cardText: {
    flex: 1,
    paddingRight: resWidth(10),
    marginTop: 10,
  },
  titleRow: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors1.white,
    fontWeight: 'bold',
    fontSize:screenWidth*0.04
    
  },
  timestampContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestampText: {
    color: Colors1.white,
    fontSize: screenWidth*0.03,
    paddingEnd: resWidth(10),
  },
  threeDotsIcon: {
    height: hp('1%'),
    width: wp('3%'),
  },
  messageText: {
    alignItems:'center',
    justifyContent:"center",
    color: Colors1.white,
    fontSize: hp('1.5%'),
    marginTop: hp('0.8%'),
  }
});
