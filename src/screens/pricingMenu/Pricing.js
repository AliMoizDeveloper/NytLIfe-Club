import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/CommonLayOut';
import {GlobalStyle, HeaderTitle} from '../../style/ExternalStyle';
import TitleHeading from '../../components/TitleAppBarIcons';
import TopBarPricing from '../../controllers/navController/topBarBookingRequest/TopBarPricing';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import FlatButtons from '../../components/FlatsButtons';
import DialogCard from '../../components/DialogCard';
import { IconString } from '../../constant/Constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Pricing = ({navigation}) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  return (
    <BackgroundImage>
      {/* <SafeAreaView style={HeaderTitle.container}> */}
      
        <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
          <View style={styles.AppBar}>
            <TitleHeading
              title={'Pricing'}
              isText={true}
              isleftIcon={true}
              leftIcon1={IconString.Go_Back}
              fontWeight={'bold'}
              isrightIcon1={true}
              pressIconleft={() => navigation.goBack()}
            />
          </View>
          <View style={styles.topTab}>
            <TopBarPricing />
          </View>
       
        </View>
      
      {/* </SafeAreaView> */}
    </BackgroundImage>
  );
};

export default Pricing;

const styles = StyleSheet.create({

  AppBar: {
    marginBottom: hp('1%'),
  },
  topTab: {
    flex: 1, 
  },

});
