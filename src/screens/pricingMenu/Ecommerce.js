


import React, { useState } from 'react';
import {  Dimensions, FlatList,StyleSheet,View} from 'react-native';
import {ImageString,Colors1, IconString, ScreenWidth1, ScreenHeight1} from '../../constant/Constants';
// import BookingRequestCard from '../../Components/Cards/BookingRequestCard';
import { resHeight, resWidth } from '../../constant/WidthHeight';
import BackgroundImage from '../../components/CommonLayOut';
import ChatHeader from '../../components/ChatHeader';
// import Colors1 from '../../constant/constants';
import FlatButtons from '../../components/FlatsButtons';
import DialogCard from '../../components/DialogCard';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const screenWidth = Dimensions.get('window').width

const data = [
  {
    id: '1',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ Groovemaster',
    description: '80$',
 
  },
  {
    id: '2',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: '80$',

  },
  {
    id: '3',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ ElectroBeats',
    description: '80$',

  },
  {
    id: '4',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ RockStar',
    description: '80$',
 
  },
  {
    id: '5',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: '80$',
 
  },
  // Add more data items as needed
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const EcommercePricing = () => {
  const renderItem = ({ item }) => (
    <ChatHeader 
    isRow={true}
    textRow1={item.title}
    fontSize1={hp('2%')}
    Img={item.imgAvatar}
    imgHeigth={screenWidth*0.2}
    imgWidth={screenWidth*0.2}
    paddingTop={resHeight(20)}
    rtmrgn={resWidth(10)}
    isIconRight={true}
    rightIconName={IconString.Three_Dots_Vertical}
    iconSize={20}
    IconColor={Colors1.white}
    isTextRight={true}
    leadText={item.description}
    // TextRightFontSize={15}
    />
  );

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <BackgroundImage>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    <View style={styles.bottomButton}>
              <FlatButtons title={'Add Product'} onPress={toggleModal} WidthBtn={ScreenWidth1(0.5)} buttonHeight={hp('5%')} buttonpad={1}/>
          </View>
          <DialogCard 
          textContent1={'Product Name'}
          textContent2={'Product Price'}
          textContent3={'Upload Image'}
          isModalVisible={isModalVisible} 
          toggleModal={toggleModal} 
          titleDialogBox={'Add Product'} 
          BtnText={'Enter'} 
          widthBtn={wp('18%')} 
          buttonpad={1}/>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  bottomButton:{
    // flex:.4,
    // backgroundColor:'red',
    // justifyContent:'center',
    alignItems:'center',
    height:ScreenHeight1(0.09),
    marginTop:screenWidth*0.05,
  }
})

export default EcommercePricing;
