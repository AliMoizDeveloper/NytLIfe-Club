import React from 'react';
import {View, TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import {ImageString, ScreenHeight1} from '../../constant/Constants';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width;

const tabData = [
  {
    name: 'Home',
    img: ImageString.Home_Tab,
  },
  {
    name: 'Search',
    img: ImageString.Search_Tab,
  },
  {
    name: 'Upload',
    img: ImageString.Add_Tab,
  },
  {
    name: 'Details',
    img: ImageString.Detail_tab,
  },
  {
    name: 'Profile',
    img: ImageString.Profile_Tab,
  },
];

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const tabInfo = tabData[index];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              // backgroundColor:'red',
              height: ScreenHeight1(0.09),
              flex: 1,
              alignItems: 'center',
              paddingVertical: resHeight(10),
            }}>
            {/* <Icon
              name={tabInfo.img}
              size={25}
              color={isFocused ? '#FFF' : 'gray'}
            /> */}
            <Image
              source={tabInfo.img}
              style={{
                width: screenWidth*0.08,
                height: screenWidth*0.08,
                tintColor: isFocused ? '#1E89A0' : 'gray',
              }}
            />
            {/* <Text style={{ color: isFocused ? '#FFF' : 'gray' }}>{tabInfo.name}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
