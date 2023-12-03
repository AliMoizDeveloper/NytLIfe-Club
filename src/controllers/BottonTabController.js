import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchTab,UserDashBoard,UserDetail,UserProfile, UploadMedia} from '../navigation/Index';
import CustomTabBar from '../controllers/navController/BottomNavBar';
import  BackgroundImage  from '../components/CommonLayOut'
import {NavigationString} from '../constant/Constants';


const Tab = createBottomTabNavigator();

const BottonTabController = () => {
  return (
  <BackgroundImage>
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}} tabBar={(props) => <CustomTabBar {...props}  />}>
      <Tab.Screen name={NavigationString.User_DashBoard} component={UserDashBoard}  />
      <Tab.Screen name={NavigationString.Search_Tab} component={SearchTab} />
      <Tab.Screen name={NavigationString.UploadMedia} component={UploadMedia} />
      <Tab.Screen name={NavigationString.User_Detail} component={UserDetail} />
      <Tab.Screen name={NavigationString.User_Profile} component={UserProfile} />
    </Tab.Navigator>
    </BackgroundImage>
  )
}

export default BottonTabController