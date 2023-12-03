import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GallaryTab, MusicTab, VidTab} from '../../navigation/Index';
import {
  Colors1,
  FontSizes,
  IconString,
  NavigationString,
} from '../../constant/Constants';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Platform } from 'react-native';


const Tab = createMaterialTopTabNavigator();

const TopNavBar = () => {
  return (
    // <BackgroundImage>
    <Tab.Navigator
      initialRouteName={NavigationString.Image_Tab}
      screenOptions={{
        // tabBarLabelStyle: {fontSize: 10, color: Colors1.white},
        // tabBarItemStyle: {width: resWidth(120)},
        tabBarStyle: Platform.OS==='ios'?styles.iosTabBarStyle:styles.androidTabBarStyle
      }}>
      <Tab.Screen
        name={NavigationString.Image_Tab}
        component={GallaryTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={IconString.Gallery} style={styles.iconContain} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.Music_Tab}
        component={MusicTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={IconString.Music} style={styles.iconContain} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationString.Video_Tab}
        component={VidTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image source={IconString.Video} style={styles.iconContain} />
          ),
        }}
      />
    </Tab.Navigator>
    // </BackgroundImage>
  );
};

const styles = StyleSheet.create({
androidTabBarStyle:{
  backgroundColor: 'transparent',
height: heightPercentageToDP('6%'),
marginTop:heightPercentageToDP('2%')
},
iosTabBarStyle:{
  backgroundColor: 'transparent',
  height: heightPercentageToDP('6%'),
  // marginTop:heightPercentageToDP('0.5%')
},

  iconContain: {
    color: Colors1.white,
    fontSize: FontSizes.FS20,
    // height: heightPercentageToDP('3%'),
    // width: widthPercentageToDP('5%'),
  },
});

export default TopNavBar;
