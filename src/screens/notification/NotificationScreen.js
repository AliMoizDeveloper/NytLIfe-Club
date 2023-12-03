import {StyleSheet, Text, View, FlatList, Dimensions, Platform} from 'react-native';
import {React, useState} from 'react';
import {IconString, ImageString} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import BackgroundImage from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import NotificationComponent from '../notification/NotificationComponent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { HeaderTitle } from '../../style/ExternalStyle';

const NotificationScreen = ({navigation}) => {

  const screenWidth = Dimensions.get('window').width;
  const screenheight = Dimensions.get('window').height;
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'DJ Shadow',
      message: 'Streaming has been ended',
      timestamp: 'Just Now',
    },
    {
      id: '2',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Courtney Henry',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '3',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Annette Black',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '4',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Devon Lane',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '5',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Ralph Edwards',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '6',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Theresa Webb',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '7',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Marvin McKinney',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
    {
      id: '8',
      imageUrl: ImageString.Avatar_ImageLog,
      title: 'Ronald Richards',
      message:
        'With numerous chart-topping hits and a collection of accolades to their name, amethyst_boy',
      timestamp: '2 hr',
    },
  ]);

  const addNotification = () => {
    const newNotification = {
      id: String(notifications.length + 1),
      title: `Notification ${notifications.length + 1}`,
      message: `This is a new notification message.`,
    };

    setNotifications(prevNotifications => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  return (
    <BackgroundImage justifyContent={'flex-start'}>
      <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
        <View style={styles.appBarStyle}>
          <TitleHeading
            isleftIcon={true}
            isText={true}
            isrightIcon1={true}
            title={'Notification'}
            leftIcon1={IconString.Go_Back}
            pressIconleft={() => navigation.goBack()}
            fontWeight={'bold'}
          />
        </View>
        <FlatList
          style={{height:screenheight*0.85}}
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NotificationComponent notificationsData={item} />
          )}
        />
      </View>
    </BackgroundImage>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  notificationContainer: {
  marginTop: hp('4%'),
  padding:hp('1%')},
  appBarStyle: {paddingLeft: wp('2.5%')},
});
