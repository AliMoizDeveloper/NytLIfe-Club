import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import BackgroundImage from '../../../components/CommonLayOut';
import {resHeight, resWidth} from '../../../constant/WidthHeight';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {
  Colors1,
  FontSizes,
  IconString,
  ImageString,
  NavigationString,
} from '../../../constant/Constants';
import HorizontalCard from '../../../components/cards/CustomCard';
import CarouselCardSlider from '../../../components/cards/CorouselCardSlider';
import DrawerNav from '../../../controllers/DrawerNav';
import {useRef,useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Drawer from 'react-native-drawer';
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
];
const cardData1 = [
  {
    title: 'Envy Lounge',
    // price: 19.99,
    imageUri: require('../../../../assets/images/card2.png'),
  },
  {
    title: 'Glitter Club',
    // price: 29.99,
    imageUri: require('../../../../assets/images/card3.png'),
  },
  {
    title: 'Liv',
    // price: 29.99,
    imageUri: require('../../../../assets/images/Card1.png'),
  },
];

const SearchTab = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const drawerRef=useRef(null)

  const handleButton = () => {
    console.log('Stream Pressed');
    console.log('View Bid Pressed');
  };

  // const drawer = useRef(null);

  const CircleImageListItem = ({item}) => (
    <View
      style={{
        borderRadius: 25,
        backgroundColor: Colors1.grey,
        // width:resWidth(80),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: hp('1%'),
      }}>
      <TouchableOpacity>
        <Text
          style={{
            paddingHorizontal: hp('2%'),
            color: Colors1.white,
            fontSize: hp('2%'),
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const data = [
    {
      id: '1',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Hit DJ',
      // route: NavigationString.Pricing,
    },
    {
      id: '2',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Trending DJ',
      // route: NavigationString.BookingList,
    },
    {
      id: '3',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Latest DJ',
      // route: NavigationString.BookingList,
    },
    {
      id: '4',
      image: ImageString.Club_DashBoard_BackImage,
      text: 'Top Promoters',
      // route: NavigationString.BookingList,
    },
  ];

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
    <BackgroundImage justifyContent={'flex-start'}>
      {/* <SafeAreaView style={HeaderTitle.container}> */}
      {/* <DrawerNav drawer={drawer}> */}
        <ScrollView >
          <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
            <TitleHeading
              title={'Explore'}
              fontSize={FontSizes.FS25}
              fontWeight={'bold'}
              isText={true}
              isleftIcon={true}
              isrightIcon1={true}
              leftIcon1={IconString.Side_Nav}
              pressIconleft={() => drawerRef.current.open()}
              pressIconright1={() =>
                navigation.navigate(NavigationString.NotificationScreen)
              }
              Icon1={IconString.Bell}

            />
            </View>
            <View
              style={{
                width: '100%',
                height: hp('3.5%'),
                marginTop: hp('3%'),
                justifyContent: 'center',
                alignItems:'center'
              }}>
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal={true}
                renderItem={({item}) => <CircleImageListItem item={item} />}
                contentContainerStyle={styles.flatListContainer}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          
          <View style={{ height: hp('34%'), marginTop:hp('1%')}}>
            <CarouselCardSlider data={data} />
          </View>

          <View
            style={HeaderTitle.cardContent
            }>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: hp('2%')}}>
              Find Promotors
            </Text>
            <Text
              onPress={() => navigation.navigate(NavigationString.Booking)}
              style={{color: 'white', fontSize: hp('1.5%')}}>
              View All
            </Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{marginBottom: hp('2%')}}>
            {cardData.map((card, index) => (
              <HorizontalCard
                key={index}
                title={card.title}
                // price={card.price}
                imageUri={card.imageUri}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
          <View
            style={HeaderTitle.cardContent}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: hp('2%')}}>
              Find DJ's
            </Text>
            <Text
              onPress={() => navigation.navigate(NavigationString.Booking)}
              style={{color: 'white', fontSize: hp('1.5%')}}>
              View All
            </Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ marginBottom:hp('3%')}}>
            {cardData1.map((card, index) => (
              <HorizontalCard
                key={index}
                title={card.title}
                // price={card.price}
                imageUri={card.imageUri}
                onPress={() => {}}
              />
            ))}
          </ScrollView>
        </ScrollView>
      {/* </DrawerNav> */}
      {/* </SafeAreaView> */}
    </BackgroundImage>
     </Drawer>
  );
};

const styles = StyleSheet.create({});

export default SearchTab;
