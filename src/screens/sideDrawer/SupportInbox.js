import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ImageBackground from '../../components/CommonLayOut';
import Tile from '../../components/cards/ChatCard';
import { IconString, ImageString, NavigationString } from '../../constant/Constants';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TitleHeading from '../../components/TitleAppBarIcons';


function SupportInbox({navigation}) {
    const data = [
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        {
          title: 'NYTLIFE SUPPORT',
          subtitle: 'You: bye...     4:00 PM',
          trail: ImageString.Avatar_ImageLog,
        },
        // Add more data items as needed
      ];

  return (
    <ImageBackground >
        <View style={styles.MainContent}>
        <View style={styles.AppBar}>
            <TitleHeading
              title={'Support Replies'}
              isText={true}
              isleftIcon={true}
              leftIcon1={IconString.Go_Back}
              fontWeight={'bold'}
              isrightIcon1={true}
              pressIconleft={() => navigation.goBack()}
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(NavigationString.UploadMedia)}>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    MainContent: {
        flex: 1,
        padding:hp('2%')
    
        // backgroundColor:'yellow'
      },
      AppBar: {
        marginVertical: hp('2%'),
      },
 
});

export default SupportInbox;









