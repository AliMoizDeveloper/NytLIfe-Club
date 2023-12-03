import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import BackgroundImage from '../../../components/CommonLayOut';
import { resFont, resHeight, resWidth } from '../../../constant/WidthHeight';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {
  Colors1,
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
  ScreenHeight1,
  ScreenWidth1,
  overallStyle,
} from '../../../constant/Constants';
// import FlatButtons from '../../../components/flatsButtons';
import BackgroundImageText from '../../../components/BackgroundImageText';
// import {Icon} from 'react-native-vector-icons/Icon';
import { BookingCards, CorouselComponents } from './UserComponents';
import HorizontalCard from '../../../components/cards/CustomCard';
import CustomTitle from '../../../components/TitleHeader';
import DrawerNav from '../../../controllers/DrawerNav';
import { useState } from 'react';
import Drawer from 'react-native-drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { HeaderTitle } from '../../../style/ExternalStyle';


const cardData = [
  {
    title: 'DJ Pop',
    // price: 19.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
  {
    title: 'DJ Electronic',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'DJ Vine',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  // Add more card objects as needed
];

const UserDashBoard = ({ navigation }) => {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null)
  // const drawer = useRef(null);
  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };
  const CircleImageListItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
        <Image resizeMode='contain' source={item.image} style={styles.circleImage} />
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
  const data = [
    {
      id: '1',
      image: IconString.BadgeIcon,
      text: 'Rates',
      route: NavigationString.Pricing,
    },
    {
      id: '2',
      image: IconString.FeedbackIcon,
      text: 'Reviews',
      route: NavigationString.Review_Screen,
    },
    {
      id: '3',
      image: IconString.MediaPlayer,
      text: 'Upload',
      route: NavigationString.UploadMedia,
    },
    {
      id: '4',
      image: IconString.WalletIcon,
      text: 'Wallet',
      route: NavigationString.Wallet,
    },
 
  ];
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
          closeDrawer={() => drawerRef.current.close()}
        />

      }
      openDrawerOffset={100}
      styles={{ flex: 1 }}
    // tweenHandler={Drawer.tweenPresets.parallax}
    >
      <BackgroundImage>
       <ScrollView >
          {/* <SafeAreaView > */}
            <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
              <TitleHeading
                title={'Club DashBoard'}
                fontWeight={'bold'}
                fontSize={FontSizes.FS25}
                isText={true}
                isleftIcon={true}
                pressIconleft={() => drawerRef.current.open()}
                isrightIcon1={true}
                isrightIcon2={true}
                leftIcon1={IconString.Side_Nav}
                pressIconright1={() =>
                  navigation.navigate(NavigationString.Club_List)
                }
                Icon1={IconString.Chat}
                Icon2={IconString.Bell}
                pressIconright2={() =>
                  navigation.navigate(NavigationString.NotificationScreen)
                } />
                {/* </SafeAreaView> */}
                </View>
              <View style={styles.sliderAvatar}>
                <FlatList
                  data={data}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  renderItem={({ item }) => <CircleImageListItem item={item} />}
                  contentContainerStyle={styles.flatListContainer}
                  showsHorizontalScrollIndicator={false}

                // style={styles.flatList}
                />
              </View>
            
            <CorouselComponents
              pressViewJobs={() => navigation.navigate(NavigationString.ViewJobs)}
              pressEdit={() => navigation.navigate(NavigationString.EditProfile)}
              pressUploadJob={() =>
                navigation.navigate(NavigationString.Post_Job)
              }
            />
            <View style={biddingOverView.biddingContainer}>
              <BookingCards />
            </View>
            
            <View >
              <View style={HeaderTitle.cardContent}>
                <Text style={styles.bookingText}>Booking History</Text>
                <Text
                  onPress={() => navigation.navigate(NavigationString.Booking)}
                  style={styles.viewAllText}>
                  View All
                </Text>
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
            </View>
          </ScrollView>
          {/* </DrawerNav> */}
       
      </BackgroundImage>
    </Drawer>
  );
};

const biddingOverView = StyleSheet.create({
  biddingContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: resHeight(15),
    position: 'relative',
    // paddingLeft: resWidth(10)
  },
});

const coroselCardStyle = StyleSheet.create({
  container1: {
 
    // paddingHorizontal:resWidth(30),
    // backgroundColor:'red',
    marginBottom: hp('2%'),
  },
});

const styles = StyleSheet.create({
  mainContainer:{
paddingTop:ScreenHeight1(0.07),
paddingHorizontal:wp('4%')
  },

  sliderAvatar: {
    flex: 1,
    width: '100%',
    paddingTop: resHeight(20),
  },

  rowText: {
    // paddingTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: wp('4%'),
    // backgroundColor:'red'
  },
  bookingText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FontSizes.FS25,
  },
  viewAllText: { color: 'white', 
  fontSize: FontSizes.FS18, 
  alignSelf: 'flex-end' },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:Colors1.themeColor,
    marginHorizontal: ScreenWidth1(0.045),
  },
  circleImage: {
    justifyContent:'center',
    alignItems:'center',
    width: ScreenWidth1(0.15),
    height: ScreenWidth1(0.15),
    backgroundColor:Colors1.themeColor,
    borderRadius:hp('5%')



  },
  itemText: {
    color: 'white',
    fontSize: FontSizes.FS13,
    textAlign: 'center',
    marginTop: resHeight(10),
  },
});

export default UserDashBoard;
