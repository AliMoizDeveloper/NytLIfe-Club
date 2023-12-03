import React, {  useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Dimensions, Platform } from 'react-native';
import BackgroundImage from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import { Colors1, FontSizes, IconString, ImageString, NavigationString, ScreenHeight1, ScreenWidth1 } from '../../constant/Constants';
import DrawerNav from '../../controllers/DrawerNav';
import SearchAppBar from '../../components/SearchAppBar';
import JobsList from './JobComponent';
import { resHeight, resWidth } from '../../constant/WidthHeight';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Drawer from 'react-native-drawer';
import { HeaderTitle } from '../../style/ExternalStyle';


const screenWidth = Dimensions.get('window').width;

const ViewJobs = ({navigation}) => {



    const openDrawer = () => {
        setDrawerOpen(true);
      };

    // const drawer = useRef(null);
    const drawerRef = useRef(null)
    const [jobs, setJobs] = useState([
        {
            id: '1',
            imageUrl: ImageString.Club_DashBoard_BackImage,
            title: 'XS Nightclub',
            title1: 'Just Now',
            message: 'Looking for a dynamic DJ to set the dance floor on fire with top-notch EDM and House beats.',
        },
        {
            id: '2',
            imageUrl: ImageString.Club_DashBoard_BackImage,
            title: 'XS Nightclub',
            title1: 'Just Now',
            message: 'Looking for a dynamic DJ to set the dance floor on fire with top-notch EDM and House beats.',
        },
        {
            id: '3',
            imageUrl: ImageString.Club_DashBoard_BackImage,
            title: 'XS Nightclub',
            title1: 'Just Now',
            message: 'Looking for a dynamic DJ to set the dance floor on fire with top-notch EDM and House beats.',
        }, {
            id: '4',
            imageUrl: ImageString.Club_DashBoard_BackImage,
            title: 'XS Nightclub',
            title1: 'Just Now',
            message: 'Looking for a dynamic DJ to set the dance floor on fire with top-notch EDM and House beats.',
        }, {
            id: '5',
            imageUrl: ImageString.Club_DashBoard_BackImage,
            title: 'XS Nightclub',
            title1: 'Just Now',
            message: 'Looking for a dynamic DJ to set the dance floor on fire with top-notch EDM and House beats.',
        },
    ]);
    const addJobs = () => {
        const newJobs = {
            id: String(jobs.length + 1),
            title: `Jobs ${jobs.length + 1}`,
            message: `This is a Job.`,
        };
        setReviews((prevJobs) => [...prevJobs, newJobs]);
    };
    const handleSearch = (searchText) => {
        console.log('Searching for:', searchText);
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
            {/* <DrawerNav drawer={drawer}> */}
            <ScrollView style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
            <TitleHeading
            title={'Jobs'}
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
              } 
          />
        <SearchAppBar
            isLeftAvatr={true}   //true means to remove left Avatar
            isRightIcon={true}  //true means to remove icon because || is added in cond
            isLeftIcon={true}
            justifyContent={'center'}
            alignItems={'center'}
            iconName={IconString.SearchIcon}
            inputheight={screenWidth*0.1}
            inputWidth={ScreenWidth1(0.9)}
            rightIconImg={IconString.Filter_Icon}
            mrgrt={resWidth(5)}
            inputBackgroundColor={'transparent'}
            marginTop={resHeight(18)}
            fontSize={FontSizes.FS15}
            placeholder={'Search Job'}
            style={{flex:1,color:Colors1.white}}
          />
         <SearchAppBar
            isLeftAvatr={true}   //true means to remove left Avatar
            isRightIcon={true}  //true means to remove icon because || is added in cond
            isLeftIcon={true}
            justifyContent={'center'}
            alignItems={'center'}
            iconName={IconString.LocationIcon}
            inputheight={screenWidth*0.1}
            inputWidth={ScreenWidth1(0.9)}
            rightIconImg={IconString.Filter_Icon}
            mrgrt={resWidth(5)}
            inputBackgroundColor={'transparent'}
            marginTop={resHeight(18)}
            fontSize={FontSizes.FS15}
            placeholder={'Location'}
          />
            <FlatList style={{ marginVertical: ScreenHeight1(0.03) }}
                data={jobs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <JobsList jobsData={item} />
                )}
            />
            </ScrollView>
            {/* </DrawerNav> */}
       </BackgroundImage>
       </Drawer>
    );
};

export default ViewJobs;