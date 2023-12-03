import {Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenWidth = Dimensions.get('window').width;


const Colors1 = {
    white: '#fff',
    black: '#000',
    blue: '#5D5FEE',
    grey: '#BABBC3',
    light: '#F3F4FB',
    darkBlue: '#7978B5',
    red: 'red',
    themeColor:'#1E89A0',
    darkGrey:'rgb(67,67,67)',
    lightBlack:'rgb(32,32,32)',
    transparent:'rgba(20, 20, 20, 0.8)',
    themeColorOpacity:'rgba(30, 137, 160, 0.1)',
    Green:'green'
  };

  const ImageString = {
    ConnectWithPromotor: require('../../assets/images/colleagues-dancing-banner.png'),
    Main_BackGround_Image: require('../../assets/images/background1.jpg'),
    Club_DashBoard_BackImage: require('../../assets/images/dashboard_image.png'),
    Club_DashBoard_Biding: require('../../assets/images/biding_OverView.png'),
    Banner_Image: require('../../assets/images/regpic.jpg'),
    Avatar_ImageReg: require('../../assets/images/regpix1.png'),
    Avatar_ImageLog: require('../../assets/images/regpix2.png'),
    FaceBook_Logo: require('../../assets/images/facebookSocial.png'),
    Google_Logo: require('../../assets/images/googleSocial.png'),
    Home_Tab: require('../../assets/images/homeTab.png'),
    Search_Tab: require('../../assets/images/searchTab.png'),
    Add_Tab: require('../../assets/images/addTab.png'),
    Detail_tab: require('../../assets/images/detailTab.png'),
    Profile_Tab: require('../../assets/images/personIcon.png'),
    EditIcon: require('../../assets/images/EditIcon.png'),
    WorldPic: require('../../assets/images/world.png'),
    Edit_Icon: require('../../assets/images/edit_icon.png'),
    Three_Dots: require('../../assets/images/three_dots.png'),
    Card_Front: require('../../assets/images/card-front.png'),
    AvatarUploadIcon: require('../../assets/images/upload_file.png')
  };

//   const ImageString= {
//     Main_BackGround_Image:require('../../assets/images/background1.jpg'),
//     Club_DashBoard_BackImage:require('../../assets/images/dashboard_image.png'),
//     Club_DashBoard_Biding:require('../../assets/images/biding_OverView.png'),
//     Banner_Image: require('../../assets/images/regpic.jpg'),
//     Avatar_ImageReg:require('../../assets/images/regpix1.png'),
//     Avatar_ImageLog:require('../../assets/images/regpix2.png'),
//     FaceBook_Logo: require('../../assets/images/facebookSocial.png'),
//     Google_Logo: require('../../assets/images/googleSocial.png'),
//     Home_Tab: require('../../assets/images/homeTab.png'),
//     Search_Tab:require('../../assets/images/searchTab.png'),
//     Add_Tab: require('../../assets/images/addTab.png'),
//     Detail_tab:require('../../assets/images/detailTab.png'),
//     Profile_Tab:require('../../assets/images/personIcon.png'),
//     EditIcon:require('../../assets/images/EditIcon.png'),
//     WorldPic:require('../../assets/images/world.png'),
//     Edit_Icon:require('../../assets/images/edit_icon.png'),
//     Three_Dots: require('../../assets/images/three_dots.png'),
//   Card_Front: require('../../assets/images/card-front.png'),
//   Fb: require('../../assets/images/fb.png'),
    

// };
const IconString = {
  Edit_Icon_Profile: require('../../assets/images/EditIconProfile.png'),
  SearchIcon: require('../../assets/images/SearchIcon.png'),
  Like_Icon: require('../../assets/images/likeIcon.png'),
  LikeIcon: require('../../assets/images/like_Icon.png'),
  CommentIcon: require('../../assets/images/comment_Icon.png'),
  Share_Icon: require('../../assets/images/share_Icon.png'),
  Filter_Icon: require('../../assets/images/filter_Icon.png'),
  ProfileNavIcon: require('../../assets/images/profileNavIcon.png'),
  PrivacyIcon: require('../../assets/images/privacyIcon.png'),
  SettingsIcon: require('../../assets/images/settingsIcon.png'),
  HelpSupportIcon: require('../../assets/images/helpSupportIcon.png'),
  ReportProbIcon: require('../../assets/images/reportProblemIcon.png'),
  SupportInboxIcon: require('../../assets/images/supportInboxIcon.png'),
  TermPolicyIcon: require('../../assets/images/policyIcon.png'),
  OrderPaymentIcon: require('../../assets/images/paymentIcon.png'),
  LocationIcon: require('../../assets/images/locationIcon.png'),
  MediaIcon: require('../../assets/images/mediaIcon.png'),
  NotificationIcon: require('../../assets/images/NotificationIconImg.png'),
  ProfileIcon: require('../../assets/images/profileIconImg.png'),
  BlockIcon: require('../../assets/images/blockIcon.png'),
  AlertIcon: require('../../assets/images/alertIconImg.png'),
  Back_Icon: 'chevron-back-outline',
  Menu_Icon: 'reorder-two-outline',
  Chat_Bubbles: 'chatbubbles-sharp',
  Notification_Bell: 'notifications-outline',
  Bell: require('../../assets/images/bell.png'),
  Chat: require('../../assets/images/chat.png'),
  Dropdown: require('../../assets/images/dropdown.png'),
  Gallery: require('../../assets/images/gallery.png'),
  Go_Back: require('../../assets/images/go_back.png'),
  Location: require('../../assets/images/location.png'),
  Music: require('../../assets/images/music.png'),
  Pending: require('../../assets/images/pending.png'),
  Received: require('../../assets/images/received.png'),
  Search: require('../../assets/images/search.png'),
  Side_Nav: require('../../assets/images/side_nav.png'),
  Three_Dots_Vertical: require('../../assets/images/three_dots_vertical.png'),
  Upload_Media: require('../../assets/images/upload_media.png'),
  Video: require('../../assets/images/video.png'),
  Chat_Send: require('../../assets/images/chat_send.png'),
  Eye_Open: require('../../assets/images/openEye.png'),
  Eye_Closed: require('../../assets/images/closedEye.png'),
  TickCheck: require('../../assets/images/checkTick.png'),
  BadgeIcon: require('../../assets/images/BadgeIcon.png'),
  ClockIcon: require('../../assets/images/ClockIcon.png'),
  FeedbackIcon: require('../../assets/images/FeedbackIcon.png'),
  GroupIcon: require('../../assets/images/GroupIcon.png'),
  MediaPlayer: require('../../assets/images/MediaPlayer.png'),
  OfficeManager: require('../../assets/images/OfficeManagerIcon.png'),
  WalletIcon: require('../../assets/images/Wallet.png'),
  
};

// const IconString={
//     Edit_Icon_Profile:require('../../assets/images/EditIconProfile.png'),
//     SearchIcon:require('../../assets/images/SearchIcon.png'),
//     Like_Icon:require('../../assets/images/likeIcon.png'),
//     LikeIcon:require('../../assets/images/like_Icon.png'),
//     CommentIcon:require('../../assets/images/comment_Icon.png'),
//     Share_Icon:require('../../assets/images/share_Icon.png'),
//     Filter_Icon:require('../../assets/images/filter_Icon.png'),
//     ProfileNavIcon:require('../../assets/images/profileNavIcon.png'),
//     PrivacyIcon:require('../../assets/images/privacyIcon.png'),
//     SettingsIcon:require('../../assets/images/settingsIcon.png'),
//     HelpSupportIcon:require('../../assets/images/helpSupportIcon.png'),
//     ReportProbIcon:require('../../assets/images/reportProblemIcon.png'),
//     SupportInboxIcon:require('../../assets/images/supportInboxIcon.png'),
//     TermPolicyIcon:require('../../assets/images/policyIcon.png'),
//     OrderPaymentIcon:require('../../assets/images/paymentIcon.png'),
//     LocationIcon:require('../../assets/images/locationIcon.png'),
//     MediaIcon:require('../../assets/images/mediaIcon.png'),
//     NotificationIcon:require('../../assets/images/NotificationIconImg.png'),
//     ProfileIcon:require('../../assets/images/profileIconImg.png'),
//     BlockIcon:require('../../assets/images/blockIcon.png'),
//     AlertIcon:require('../../assets/images/alertIconImg.png'),
//     Back_Icon:'chevron-back-outline',
//     Menu_Icon:'reorder-two-outline',
//     Chat_Bubbles:'chatbubbles-sharp',
//     Notification_Bell:'notifications-outline',
//     Bell: require('../../assets/images/bell.png'),
//   Chat: require('../../assets/images/chat.png'),
//   Dropdown: require('../../assets/images/dropdown.png'),
//   Gallery: require('../../assets/images/gallery.png'),
//   Go_Back: require('../../assets/images/go_back.png'),
//   Location: require('../../assets/images/location.png'),
//   Music: require('../../assets/images/music.png'),
//   Pending: require('../../assets/images/pending.png'),
//   Received: require('../../assets/images/received.png'),
//   Search: require('../../assets/images/search.png'),
//   Side_Nav: require('../../assets/images/side_nav.png'),
//   Three_Dots_Vertical: require('../../assets/images/three_dots_vertical.png'),
//   Upload_Media: require('../../assets/images/upload_media.png'),
//   Video: require('../../assets/images/video.png'),
//   Chat_Send: require('../../assets/images/chat_send.png'),
//   Eye_Open: require('../../assets/images/openEye.png'),
//   Eye_Closed: require('../../assets/images/closedEye.png'),
//   TickCheck:require('../../assets/images/checkTick.png'),

// };

const NavigationString = {
    Register_Login:'RegisterLogin',
    Register_Screen:'RegisterScreen',
    Login_Screen:'LoginScreen',
    Recover_Pass:'RecoverPass',
    Enter_Otp:'Enterotp',
    Create_pass:'CreatePassword1',
    User_DashBoard:'UserDashBoard',
    User_Detail:'UserDetail',
    User_Profile:'UserProfile',
    Add_Tab:'AddTab',
    Search_Tab:'SearchTab',
    Bottom_Controller:'BottonTabController',
    Image_Tab:'Image',
    Music_Tab:'Music',
    Video_Tab:'Video',
    Club_List:'ClubChatList',
    User_Chat:'ClubUserChat',
    RequestDj:'Request',
    RequestPromotorList:'PromotorRequestList',
    RequestList:'requestList',
    Booking:'booking',
    BookingList:'bookingList',
    BookingPromotor:'bookingPromotList',
    Pricing:'PricingMenu',
    EcommercePricing:'Ecommerce',
    SectionPricing:'secPrice',
    UploadMedia:'uploadMedia',
    Post_Job:'PostJOB',
    Review_Screen:'ReviewScreen',
    EditProfile:'EditProfile',
    SettingScreen:'Settings',
    BlockingContent:'Blocking',
    ViewJobs:'ViewJobs',
    NotificationScreen: 'NotificaionScreen',
  Wallet: 'wallet',
  WalletDeposit:'WalletDeposit',
  WalletWithdraw:'WalletWithdraw',
  TermsAndPoicies:'Terms',
  OrderPayment:'OrderPayment',
  PaymentList:'PaymnetList',
  SupportInbox:'Support_Inbox',
  ReceivedPayments:'ReceivedPayment',
  PendingPayments:'PendingPayment',
  PaymentScr:'PaymentScr'
}

const overallStyle = {

  mrgnTop: screenWidth * 0.15,
  mrgnTop1: screenWidth * 0.07,
  mrgnTop2: screenWidth * 0.04,
  mrgnBottom: screenWidth * 0.15,

  mrgnTopflatbtn: screenWidth * 0.04,

  mrgnLeft:screenWidth * 0.1,
  mrgnRight:screenWidth * 0.06,
  
  flatbtnwidth: wp('80%'),
  flatbtnheight: hp('7%'),
  inputbtnheight: hp('5%'),
  subflatbtnwidth : wp('39%'),
  maintranspaddin: hp('2.5%'),

};

export const ScreenWidth1 = w1 => {
  return Dimensions.get('window').width * w1;
};

export const ScreenHeight1 = h1 => {
  return Dimensions.get('window').height * h1;
};
const FontSizes = {
  FS10: hp('1.0%'),
  FS11: hp('1.1%'),
  FS12: hp('1.2%'),
  FS13: hp('1.3%'),
  FS14: hp('1.4%'),
  FS15: hp('1.5%'),
  FS16: hp('1.6%'),
  FS17: hp('1.7%'),
  FS18: hp('1.8%'),
  FS19: hp('1.9%'),
  FS20: hp('2.0%'),
  FS21: hp('2.1%'),
  FS22: hp('2.2%'),
  FS23: hp('2.3%'),
  FS24: hp('2.4%'),
  FS25: hp('2.5%'),
  FS26: hp('2.6%'),
  FS27: hp('2.7%'),
  FS28: hp('2.8%'),
  FS29: hp('2.9%'),
  FS30:hp('3%'),

  Dis15: hp('1.5%'),
  btnTxt18: hp('1.8%'),
  btnTxt20: hp('2%'),
  FS35: hp('3.5%'),
  // FS3: hp('3%')
};

export  {
    Colors1,
    ImageString,
    NavigationString,
    IconString,
    overallStyle,
    FontSizes

}