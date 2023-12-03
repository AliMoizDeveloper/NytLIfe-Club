import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import TopBarBooking from '../../../controllers/navController/topBarBookingRequest/TopBarBooking';
import BackgroundImage from '../../../components/CommonLayOut';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {resHeight} from '../../../constant/WidthHeight';
// import { GlobalStyle } from '../../../styles/externalStyle'
import { GlobalStyle, HeaderTitle } from '../../../style/ExternalStyle'
import { IconString } from '../../../constant/Constants';

const BookingDj = ({navigation}) => {
  return (
    <BackgroundImage>
      <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <View style={styles.Header}>
          <View style={styles.AppBar}>
            <TitleHeading
              title={'Booking'}
              
              isText={true}
              isleftIcon={true}
              leftIcon1={IconString.Go_Back}
              fontWeight={'bold'}
              isrightIcon1={true}
              pressIconleft={() => navigation.goBack()}
            />
          </View>
          <View style={styles.topTab}>
            <TopBarBooking />
          </View>
        </View>
        {/* <View style={styles.MainContent}></View> */}

        {/* <View style={styles.Footer}></View> */}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    // backgroundColor:'red'
  },
  MainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  topTab: {

    flex: 1,
  },
});

export default BookingDj;
