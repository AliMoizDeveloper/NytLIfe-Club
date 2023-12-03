import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
// import FlatButtons from '../../Components/FlatsButtons'
import BackgroundImage from '../../components/CommonLayOut';
import {GlobalStyle, HeaderTitle} from '../../style/ExternalStyle';
import Input from '../../components/CustomFields';
import {ImageString, Colors1, NavigationString, ScreenWidth1} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import ChatHeader from '../../components/ChatHeader';
// import Colors1 from '../../constant/constants'
// import { white } from 'color-name'
import Tile from '../../components/cards/ChatCard';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ClubChatList = ({navigation}) => {
  const data = [
    {
      title: 'Joseph',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Rider',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Angelina',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Cristine',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Roddy',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'George',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Jenny',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Ross',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Jennifer',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Joey',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    {
      title: 'Jack',
      subtitle: 'You: bye...     4:00 PM',
      trail: ImageString.Avatar_ImageLog,
    },
    // Add more data items as needed
  ];

  return (
    <BackgroundImage>
      <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <View style={styles.Header}>
          <View style={styles.headerAvatar}>
            <View style={styles.headerAvatar1}>
              <ChatHeader
                Img={ImageString.Avatar_ImageLog}
                imgWidth={
                  ScreenWidth1(0.2)
                }
                imgHeigth={ScreenWidth1(0.2)}
                textRow1={'Chat'}
                fontWeight1={'bold'}
                isRow={true}
                rtmrgn={resWidth(10)}
                fontSize1={hp('3%')}
              />
            </View>
            <View style={styles.headerAvatar2}>
              <Image
                source={ImageString.EditIcon}
                style={{
                  height: ScreenWidth1(0.07),
                  width:
                    ScreenWidth1(0.07),
                }}
              />
            </View>
          </View>
          <View style={styles.headerAvatar3}>
            <Input
              placeholder={'Search...'}
              leftIconColor={Colors1.grey}
              placeholderTextColor={Colors1.grey}
              inputBackgroundColor={'rgba(52, 52, 52, 0.3)'}
              justifyContent={'space-start'}
              // leftIconbackgroundColor={Colors1.grey}

              isLeftIcon={true}
              iconName={ImageString.Search_Tab}
              searchHeight={resHeight(22)}
              searchWidth={resWidth(22)}
              mrgrt={resWidth(5)}
              style={{height:hp('6%'),fontSize:hp('1.5%')}}
            />
          </View>
        </View>
        <View style={styles.MainContent}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(NavigationString.User_Chat)}>
                <Tile
                  title={item.title}
                  subtitle={item.subtitle}
                  trail={item.trail}
                  // lead={item.lead}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        
      </View>
    </BackgroundImage>
  );
};

export default ClubChatList;

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    // backgroundColor:'red'
  },
  headerAvatar: {
    // backgroundColor:'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flex:1
  },
  headerAvatar1: {
    paddingTop: resHeight(20),
    // backgroundColor:'green',
    // flexDirection:'row',
    // flex:1
  },
  headerAvatar2: {
    height: Dimensions.get('window').height > 600 ? wp('10%') : wp('18%'),
    width: wp('10%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: resHeight(60),
    // color:Colors1.black
  },
  MainContent: {
    flex: 4,

    // backgroundColor:'yellow'
  },
  Footer: {
    flex: 0.6,
    // backgroundColor:'green'
  },
});
