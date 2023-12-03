import React, { useRef, useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions, Platform} from 'react-native';
import BackgroundImage from '../../../components/CommonLayOut';
import {resHeight, resWidth} from '../../../constant/WidthHeight';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {
  Colors1,
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
  ScreenWidth1,
} from '../../../constant/Constants';
import HorizontalCard from '../../../components/cards/CustomCard';
import CreateDivider from '../../../components/DividerConst';
import FlatButtons from '../../../components/FlatsButtons';
import ChatHeader from '../../../components/ChatHeader';
import FeedComponents from './FeedComponents';
import SearchAppBar from '../../../components/SearchAppBar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Drawer from 'react-native-drawer';
import DrawerNav from '../../../controllers/DrawerNav';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from '../../../style/ExternalStyle';

const cardData = [
  {
    title: 'XS Nightclub',
    // price: 19.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
  {
    title: 'House of Yes',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'Fubar nightclub',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  // Add more card objects as needed
];

const UserDetail = ({navigation}) => {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef=useRef(null)
  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };
  const [isDrawerOpen, setDrawerOpen] = useState(false);
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
      <ScrollView >
        <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
          <TitleHeading
            title={'Feed'}
            fontWeight={'bold'}
            fontSize={FontSizes.FS25}
            isText={true}
            isleftIcon={true}
            isrightIcon1={true}
            isrightIcon2={true}
            leftIcon1={IconString.Side_Nav}
            pressIconleft={() => drawerRef.current.open()}
            pressIconright1={() =>
              navigation.navigate(NavigationString.Club_List)
            }
            pressIconright2={() =>
              navigation.navigate(NavigationString.NotificationScreen)
            } 
            Icon1={IconString.Chat}
            Icon2={IconString.Bell}
          />
          <SearchAppBar
            isLeftIcon={true}
            iconName={IconString.SearchIcon}
            inputheight={hp('4%')}
            inputWidth={wp('64%')}
            rightIconImg={IconString.Filter_Icon}
            // mrgrt={resWidth(5)}
            inputBackgroundColor={'transparent'}
            marginTop={resHeight(18)}
          />
        </View>

        <View style={styles.rowText}>
          <Text style={styles.bookingText}>What's New</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={coroselCardStyle.container1}>
          {cardData.map((card, index) => (
            <HorizontalCard
              key={index}
              title={card.title}
              // price={card.price}
              imageUri={card.imageUri}
              onPress={() => {
                // Handle button press for this card
              }}
            />
          ))}
        </ScrollView>
        <View style={HeaderTitle.contentContainer}>
        <CreateDivider
          dividerWidth={ScreenWidth1(0.9)}
          margin={1}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <View style={styles.yourPost}>
          <View style={styles.rowText}>
            <Text style={styles.bookingText}>Your Posts</Text>
            <FlatButtons
              title={'Live'}
              buttonHeight={hp('4%')}
              buttonpad={1}
              WidthBtn={resWidth(70)}
            />
          </View>

          <ChatHeader
            Img={ImageString.Avatar_ImageLog}
            imgHeigth={resHeight(70)}
            imgWidth={(Dimensions.get('window').height>768)?hp('8%'):hp('7%')}
            rtmrgn={resWidth(10)}
            isRow={true}
            textRow1={'Whats On Your Mind?'}
            fontWeight1={'bold'}
          />
        </View>
        <CreateDivider
          dividerWidth={ScreenWidth1(0.9)}
          margin={1}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <View style={styles.feedCommentCard}>
          <FeedComponents />
          <FeedComponents />
        </View>
        </View>
      </ScrollView>
      {/* </DrawerNav> */}
      {/* </SafeAreaView> */}
    </BackgroundImage>
    </Drawer>
  );
};

const coroselCardStyle = StyleSheet.create({
  container1: {
    // backgroundColor:'red',
    marginBottom: resHeight(30),
  },
});

const styles = StyleSheet.create({


  appBarContainer: {
    // paddingTop: hp('2%'),
    marginBottom: 20,
  },
  rowText: {
    paddingVertical: resHeight(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
  },
  bookingText: {
    // fontWeight: 'bold',
    color: Colors1.white,
    fontSize: FontSizes.FS20,
  },
  yourPost: {
    flex: 1,
    marginBottom: resHeight(20),
  },
  feedCommentCard: { 
    width: ScreenWidth1(0.9), 
    marginBottom: resHeight(50)},
});

export default UserDetail;
