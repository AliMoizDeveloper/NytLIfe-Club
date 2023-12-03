// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterLogin,
  RegisterScreen,
  LoginScreen,
  RecoverPassword,
  Enteropt,
  CreatePassword,
  SearchTab,
  UserProfile,
  UserDetail,
  UserDashBoard,
  BottonTabController,
  GallaryTab,
  MusicTab,
  VidTab,
  ClubChatList,
  ClubUserChat,
  RequestDj,
  BookingDj,
  BookingList,
  BookingPromotor,
  RequestList,
  RequestPromotorList,
  Pricing,
  EcommercePricing,
  SectionPricing,
  UploadMedia,
  PostJob,
  ReviewScreen,
  EditProfile,
  SettingScreen,
  ViewJobs,
  BlockingContent,
  NotificationScreen,
  Wallet,
  WalletDeposit,
  WalletWithdraw,
  TermsAndPolicies,
  OrderPayment,
  SupportInbox,
  ReceivedPayments,
  PendingPayments,
  PaymentScr

} from '../navigation/Index';
import { NavigationString } from '../constant/Constants';



const AppNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
    <Stack.Navigator initialRouteName={NavigationString.Register_Login}>
         <Stack.Screen name={NavigationString.Register_Login} component={RegisterLogin} options={{headerShown:false}}/>
        <Stack.Screen name={NavigationString.Register_Screen} component={RegisterScreen} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.Login_Screen} component={LoginScreen} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Recover_Pass} component={RecoverPassword} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Enter_Otp} component={Enteropt} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Create_pass} component={CreatePassword} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.User_DashBoard} component={UserDashBoard} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.User_Detail} component={UserDetail} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.User_Profile} component={UserProfile} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.Search_Tab} component={SearchTab} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Bottom_Controller} component={BottonTabController} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Image_Tab} component={GallaryTab} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Music_Tab} component={MusicTab} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Video_Tab} component={VidTab} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Club_List} component={ClubChatList} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.User_Chat} component={ClubUserChat} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.RequestDj} component={RequestDj} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Booking} component={BookingDj} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.BookingList} component={BookingList} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.BookingPromotor} component={BookingPromotor} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.RequestList} component={RequestList} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.RequestPromotorList} component={RequestPromotorList} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.Pricing} component={Pricing} options={{headerShown:false}}/>   
         <Stack.Screen name={NavigationString.EcommercePricing} component={EcommercePricing} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.SectionPricing} component={SectionPricing} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.UploadMedia} component={UploadMedia} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Post_Job} component={PostJob} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.Review_Screen} component={ReviewScreen} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.EditProfile} component={EditProfile} options={{headerShown:false}}/> 
         <Stack.Screen name={NavigationString.SettingScreen} component={SettingScreen} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.ViewJobs} component={ViewJobs} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.BlockingContent} component={BlockingContent} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.NotificationScreen} component={NotificationScreen} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.Wallet} component={Wallet} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.WalletDeposit} component={WalletDeposit} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.WalletWithdraw} component={WalletWithdraw} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.TermsAndPoicies} component={TermsAndPolicies} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.OrderPayment} component={OrderPayment} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.SupportInbox} component={SupportInbox} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.ReceivedPayments} component={ReceivedPayments} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.PendingPayments} component={PendingPayments} options={{headerShown:false}}/>
         <Stack.Screen name={NavigationString.PaymentScr} component={PaymentScr} options={{headerShown:false}}/>
    </Stack.Navigator>
</NavigationContainer>
  )
}

export default AppNavigator