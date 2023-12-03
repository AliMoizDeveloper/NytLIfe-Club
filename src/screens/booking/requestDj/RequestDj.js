import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBarRequest from '../../../controllers/navController/topBarBookingRequest/TopBarRequest';
import BackgroundImage from '../../../components/CommonLayOut';
import {GlobalStyle} from '../../../style/ExternalStyle';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {resHeight} from '../../../constant/WidthHeight';
import {IconString} from '../../../constant/Constants';

const RequestDj = ({navigation}) => {
  return (
    <BackgroundImage>
      <View style={GlobalStyle.container}>
        <View style={styles.Header}>
          <View style={styles.AppBar}>
            <TitleHeading
              title={'Request'}
              isText={true}
              isleftIcon={true}
              leftIcon1={IconString.Go_Back}
              fontWeight={'bold'}
              isrightIcon1={true}
              pressIconleft={() => navigation.goBack()}
            />
          </View>
          <View style={styles.topTab}>
            <TopBarRequest />
          </View>
        </View>
        {/* <View style={styles.MainContent}></View> */}

        {/* <View style={styles.Footer}></View> */}
      </View>
    </BackgroundImage>
  );
};

export default RequestDj;

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    // backgroundColor:'red'
  },
  MainContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  AppBar: {
    marginVertical: resHeight(25),
  },
  topTab: {
    // width:300,
    // height:400
    flex: 1,
  },
});
