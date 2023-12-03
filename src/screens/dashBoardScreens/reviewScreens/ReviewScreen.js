import { FlatList, StyleSheet,View, Text, Dimensions, Platform} from 'react-native';
import React, {  useState } from 'react';
import BackgroundImage from '../../../components/CommonLayOut';
import TitleHeading from '../../../components/TitleAppBarIcons';
import {  IconString, ImageString, NavigationString} from '../../../constant/Constants';
import { resHeight, resWidth } from '../../../constant/WidthHeight';
import ReviewComponent from './ReviewComponent';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTitle } from '../../../style/ExternalStyle';

const screenwidth = Dimensions.get('window').height;

const ReviewScreen = ({navigation}) => {

const reviews = [
  {
    id: '1',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Lisa:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
    star: '★★★★☆ (4.2)'
  },
{
    id: '2',
    imageUrl: ImageString.Banner_Image,
    title: 'Sarah:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More ',
    star: '★★★★☆ (4.2)'
},
{
    id: '3',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Maria:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More  ',
    star: '★★★★☆ (4.2)'
},
{
    id: '4',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'cataline:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More ',
    star: '★★★★☆ (4.2)'
},
{
    id: '5',
    imageUrl: ImageString.Avatar_ImageLog,
    title: 'Jenny:',
    message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
    star: '★★★★☆ (4.2)'
},
{
  id: '6',
  imageUrl: ImageString.Avatar_ImageLog,
  title: 'Jenny:',
  message: ' A fantastic evening at Club Vibes! The DJ lineup was amazing, and the dance floor was on fire. The Perfect place to grove the night away... See More',
  star: '★★★★☆ (4.2)'
},
]





  return (
    <BackgroundImage justifyContent={'flex-start'}>
      {/* <SafeAreaView style={HeaderTitle.container}> */}
      
        <View style={Platform.OS==='ios'?HeaderTitle.container: HeaderTitle.androidContainer}>
      <TitleHeading isleftIcon={true} 
      isText={true} 
      isrightIcon1={true}
      title={'View Reviews'}
      leftIcon1={IconString.Go_Back}
      fontWeight={'bold'}
      pressIconleft={()=>navigation.goBack()}
      />



<FlatList
                style={{ height:screenwidth*0.8}}
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ReviewComponent reviewsData={item} />
                )}
            />

                  
</View>
{/* </SafeAreaView> */}
    </BackgroundImage>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
    // appBarContainer:{
    //   paddingLeft:widthPercentageToDP('2%'),
    //   paddingTop:resHeight(40),
    //   marginBottom:resHeight(35)
    // },

});

