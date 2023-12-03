import {View, Text, StyleSheet, Image, Dimensions, Platform} from 'react-native';
import React, { useRef } from 'react';
import {GlobalStyle, HeaderTitle} from '../../style/ExternalStyle';
import BackgroundImage from '../../components/CommonLayOut';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import TitleHeading from '../../components/TitleAppBarIcons';
// import NavigationString from '../../Constants/NavigationString'
import {Colors1, FontSizes, IconString, ImageString, ScreenHeight1, ScreenWidth1} from '../../constant/Constants';
import CustomTitle from '../../components/TitleHeader';
import CreateDivider from '../../components/DividerConst';
import TopNavBar from '../../controllers/navController/TopNavBar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DrawerNav from '../../controllers/DrawerNav';
import Drawer from 'react-native-drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = ({navigation}) => {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef=useRef(null)
  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <Drawer
    tapToClose={true}
    ref={drawerRef}
      type="static"
      content={
       <DrawerNav
       closeDrawer={()=>drawerRef.current.close()}
       />

      }
      openDrawerOffset={100}
      styles={{flex: 1}}
      // tweenHandler={Drawer.tweenPresets.parallax}
    >
    <BackgroundImage>
      {/* <SafeAreaView style={HeaderTitle.container}> */}
      {/* <DrawerNav drawer={isDrawerOpen}> */}
      <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <View style={styles.header1}>
          <View style={styles.headerAppBar}>
            <TitleHeading
              isleftIcon={true}
              isText={true}
              // isrightIcon1={true}
              isrightIcon2={true}
              leftIcon1={IconString.Side_Nav}
              title={'Club Profile'}
              fontSize={FontSizes.FS25}
              Icon2={IconString.Three_Dots_Vertical}
              // Icon1={IconString.Chat}
              fontWeight={'bold'}
              pressIconleft={() => drawerRef.current.open()}

            />
          </View>
          <View style={styles.avatarHeader}>
            <Image
              source={ImageString.Avatar_ImageReg}
              style={styles.profileAvatar}
            />
            <CustomTitle
              isRow={false}
              fontWeight={'bold'}
              textColumn1={'Post'}
              textColumn2={'100K'}
              fontSize1={hp('2%')}
              fontSize2={hp('2%')}
            />
            <CustomTitle
              isRow={false}
              fontWeight={'bold'}
              textColumn1={'Post'}
              textColumn2={'100K'}
              fontSize1={hp('2%')}
              fontSize2={hp('2%')}
            />
            <CustomTitle
              isRow={false}
              fontWeight={'bold'}
              textColumn1={'Post'}
              textColumn2={'100K'}
              fontSize1={hp('2%')}
              fontSize2={hp('2%')}
            />
          </View>
          <View style={styles.avatarContent}>
            <TitleHeading
              title={'XS Nightclub'}
              isText={true}
              justifyContent={'flex-start'}
              fontWeight={'bold'}
              fontSize={FontSizes.FS20}
            />
            <TitleHeading
              title={
                'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy'
              }
              fontSize={FontSizes.FS15}
              isText={true}
              justifyContent={'flex-start'}
            />
            <TitleHeading
              title={'Street 307, Batumi, georgia'}
              fontSize={FontSizes.FS25}
              isText={true}
              justifyContent={'flex-start'}
            />
            <CreateDivider
            
              borderWidth={0.1}
              borderColor={Colors1.grey}
              dividerWidth={ScreenWidth1(0.90)}
              marginTop={ScreenHeight1(0.02)}
              margin={1}
            />
          </View>
        
        <View style={styles.mainContent1}>
          {/* <View style={styles.topNav}> */}
          <TopNavBar />
          {/* </View> */}
        </View>
      </View>
      </View>
      {/* </DrawerNav> */}
      {/* </SafeAreaView> */}
    </BackgroundImage>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  },
  header1: {
    flex: 1,
    // marginTop: hp('3%'),
    // padding:hp('3%')
    // backgroundColor:'red'
  },
  headerAppBar: {
    marginBottom:hp('1%')
    // backgroundColor:'yellow'
  },
  avatarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor:'yellow'
  },
  avatarContent: {
    paddingTop: resHeight(10),
    // paddingHorizontal: wp('3%'),
  },
  mainContent1: {
    flex:1,
    // height: hp('35%'),
    // backgroundColor:'pink'
  },

  profileAvatar: {
    // backgroundColor:'red',
    height:ScreenWidth1(0.3),
    width:ScreenWidth1(0.3),
    borderRadius: hp('10%'),
  },
});

export default UserProfile;
