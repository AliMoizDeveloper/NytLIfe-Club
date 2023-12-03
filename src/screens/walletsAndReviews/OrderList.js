import { Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, {useState} from 'react';
import { Colors1, IconString, ImageString, NavigationString } from '../../constant/Constants';
import ImageBackground from '../../components/CommonLayOut';
import { resHeight, resWidth } from '../../constant/WidthHeight';
import TitleHeading from '../../components/TitleAppBarIcons';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const OrderPayment = ({navigation}) => {
    
  return (
    <ImageBackground justifyContent={'flex-start'}>
      <View style={styles.AppBar}>
      <TitleHeading
      isText={true}
      title={'Order'}
      fontWeight={'bold'}
      fontSize={heightPercentageToDP('4%')}
          isrightIcon1={true}
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          // fontWeight={'bold'}
          pressIconleft={() => navigation.goBack()}
        />
      </View>
      <View style={[styles.container]}>
         
                    <TouchableOpacity onPress={()=>navigation.navigate(NavigationString.SettingScreen)}>
                    <View style={styles.rowDrawerContent}>
            <Image source={IconString.NotificationIcon} style={styles.drawerIconContent}/>
            <Text style={styles.drawerTextContent}>Order</Text>
          </View>
          </TouchableOpacity>
 

 

            
        </View>
    </ImageBackground>
  )
}

export default OrderPayment

const styles = StyleSheet.create({
  AppBar: {
    // flex:1,
    padding:heightPercentageToDP('3%'),
    marginTop: resHeight(50),
    marginBottom:resHeight(20)
  },
  container: {
    padding: resHeight(40),
  },

  paragraph: {
      color:Colors1.white,
    padding: 16,
    fontSize: 25,
    fontWeight:'bold'
  //   textAlign: 'center',
  },
  rowDrawerContent:{flexDirection:'row',alignItems:'center',paddingVertical:resHeight(10)},
  drawerIconContent:{width:resWidth(30),height:resHeight(30)},
  drawerTextContent:{color:Colors1.white,fontSize:resWidth(22),fontWeight:'300',marginLeft:resWidth(10)}
})