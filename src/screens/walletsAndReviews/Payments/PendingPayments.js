


import { FlatList, StyleSheet,View} from 'react-native';
import React, {  useState } from 'react';
import BackgroundImage from '../../../components/CommonLayOut';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {  Colors1, IconString, ImageString} from '../../../constant/Constants';
import { resHeight, resWidth } from '../../../constant/WidthHeight';
import ReviewComponent from '../../dashBoardScreens/reviewScreens/ReviewComponent';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PendingPayments = ({navigation}) => {

const receivedPay = [
    {
            id: '1',
            imageUrl: ImageString.Avatar_ImageLog,
            title: 'Club Name',
            Date: 'Date: 20/03/2023',
            price:'Price: 150$',
            event: 'Event Type: Wedding Event'
          },
          {
            id: '2',
            imageUrl: ImageString.Avatar_ImageLog,
            title: 'Club Name',
            Date: 'Date: 20/03/2023',
            price:'Price: 150$',
            event: 'Event Type: Wedding Event'
          },
{
    id: '3',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Club Name',
    Date: 'Date: 20/03/2023',
    price:'Price: 150$',
    event: 'Event Type: Wedding Event'
},
{
    id: '4',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Club Name',
    Date: 'Date: 20/03/2023',
    price:'Price: 150$',
    event: 'Event Type: Wedding Event'
},
{
    id: '5',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Club Name',
    Date: 'Date: 20/03/2023',
    price:'Price: 150$',
    event: 'Event Type: Wedding Event'
},
{
  id: '6',
  imageUrl: ImageString.Avatar_ImageLog,
  title: 'Club Name',
  Date: 'Date: 20/03/2023',
  price:'Price: 150$',
  event: 'Event Type: Wedding Event'
},
]





  return (
    <BackgroundImage justifyContent={'flex-start'}>
      {/* <View style={{padding:hp('1%')}}> */}
        <View style={styles.appBarContainer}>
      <TitleHeading isleftIcon={true} 
      isText={true} 
      isrightIcon1={true}
      title={'Pending Payment'}
      leftIcon1={IconString.Go_Back}
      fontWeight={'bold'}
      pressIconleft={() => navigation.goBack()}
      />
</View>
<FlatList
                data={receivedPay}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ReviewComponent reviewsData={item} text={'Pending'} isRow isRightText isTextColor={Colors1.red}/>
                )}
            />
            {/* </View> */}
    </BackgroundImage>
  );
};

export default PendingPayments;

const styles = StyleSheet.create({
    appBarContainer:{
      paddingLeft:wp('2%'),
      paddingTop:resHeight(40),
      marginBottom:resHeight(35)
    },

});


