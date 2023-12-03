import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  BookingPromotor ,BookingList,} from '../../../navigation/Index'
// import BackgroundImage from '../CommonLayOut';
import Icon from 'react-native-vector-icons/Ionicons';
// import NavigationString from '../../../constant/constants';
import { resHeight, resWidth } from '../../../constant/WidthHeight';
import {Colors1,NavigationString} from '../../../constant/Constants';

// Import your tab screens here


const Tab = createMaterialTopTabNavigator();

const TopBarBooking = () => {
  return (
    // <BackgroundImage>
    <Tab.Navigator initialRouteName={NavigationString.BookingList} screenOptions={{tabBarLabelStyle:{fontSize:resWidth(15),color:Colors1.white},tabBarItemStyle: { width: resWidth(170),},tabBarStyle: { backgroundColor: 'transparent',height:resHeight(50),borderBottomColor:Colors1.themeColor},}}>
      <Tab.Screen name={NavigationString.BookingList} component={BookingList} options={{tabBarLabel:'Dj'}}/>
      <Tab.Screen name={NavigationString.BookingPromotor} component={BookingPromotor} options={{tabBarLabel:'Promotor'}}/>
    </Tab.Navigator>
    // </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  container:{
    alignSelf: "center",
    width: resWidth(400),
    borderRadius: 30,
    borderColor: "blue",
    backgroundColor: "transparent",
    elevation: 5, // shadow on Android
    shadowOpacity: .10, // shadow on iOS,
    shadowRadius: 4, // shadow blur on iOS
  },
  iconContain:{
    color:'white',
    fontSize:15
  },

})

export default TopBarBooking;
