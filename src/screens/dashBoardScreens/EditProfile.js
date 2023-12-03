import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import ImageBackground from '../../components/CommonLayOut';
import {Colors1, ImageString, IconString, ScreenWidth1, ScreenHeight1} from '../../constant/Constants';

import TransparentCard from '../../components/cards/CardConst';
import CustomTitle from '../../components/TitleHeader';
import CreateDivider from '../../components/DividerConst';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import FlatButtons from '../../components/FlatsButtons';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Input from '../../components/CustomFields';

const EditProfile = () => {
  const screenWidth = Dimensions.get('window').width;

  const launchNAtiveLibrary = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  };

  return (
    <ImageBackground justifyContent={'flex-start'}>
      <View Style={styles.scrollViewContent}>
        <ScrollView>
          <View style={styles.registerAvatar}>
            <View style={styles.avatarProfile}>
              <Image
                source={ImageString.Banner_Image}
                style={styles.avatarReg}
              />
              <TouchableOpacity onPress={launchNAtiveLibrary}>
                <View style={styles.editLowerBound} />
                <View style={styles.editUpperBound}>
                  <Image
                    source={IconString.Edit_Icon_Profile}
                    style={styles.editIconImage}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <CustomTitle
              isRow={true}
              textRow1="Puerto"
              textRow2="Rico"
              fontWeight1={500}
              fontWeight2={500}
              fontSize1={hp('3%')}
              fontSize2={hp('3%')}
              marginRight1={hp('1%')}
            />
            <CustomTitle
              isRow={true}
              textRow1="youremail@domain.com |"
              textRow2="+01 234 567 89"
              fontWeight1={500}
              fontWeight2={500}
              fontSize1={hp('1.5%')}
              fontSize2={hp('1.5%')}
              marginRight1={hp('1%')}
            />
          </View>
          <View style={styles.registerCard}>
            <TransparentCard  >
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: screenWidth*0.03,
                    marginTop: hp('2.4%'),
                  }}>
                  About Us
                </Text>
                <Input
                  inputheight={hp('5.5%')}
                  textColor={'white'}
                  inputwidth={screenWidth * 0.8}
                  inputBackgroundColor={Colors1.transparent}
                  placeholderTextColor="black"
                  alignSelf={'center'}
                />
              </View>

              <CreateDivider
            
            borderWidth={0.1}
            borderColor={Colors1.grey}
            dividerWidth={ScreenWidth1(0.8)}
            marginTop={ScreenHeight1(0.02)}
            margin={1}
          />
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: screenWidth*0.03,
                    marginTop: hp('2.4%'),
                  }}>
                  Genres
                </Text>
                <Input
                  inputheight={hp('5.5%')}
                  textColor={'white'}
                  inputwidth={screenWidth * 0.8}
                  inputBackgroundColor={Colors1.transparent}
                  placeholderTextColor="black"
                  alignSelf={'center'}
                />
              </View>

              <CreateDivider
            
            borderWidth={0.1}
            borderColor={Colors1.grey}
            dividerWidth={ScreenWidth1(0.8)}
            marginTop={ScreenHeight1(0.02)}
            margin={1}
          />
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: screenWidth*0.03,
                    marginTop: hp('2.4%'),
                  }}>
                  Experience
                </Text>
                <Input
                  inputheight={hp('5.5%')}
                  textColor={'white'}
                  inputwidth={screenWidth * 0.8}
                  inputBackgroundColor={Colors1.transparent}
                  placeholderTextColor="black"
                  alignSelf={'center'}
                />
              </View>

              <CreateDivider
            
            borderWidth={0.1}
            borderColor={Colors1.grey}
            dividerWidth={ScreenWidth1(0.8)}
            marginTop={ScreenHeight1(0.02)}
            margin={1}
          />
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: screenWidth*0.03,
                    marginTop: hp('2.4%'),
                  }}>
                  Date of Birth
                </Text>
                <Input
                  inputheight={hp('5.5%')}
                  textColor={'white'}
                  inputwidth={screenWidth * 0.8}
                  inputBackgroundColor={Colors1.transparent}
                  placeholderTextColor="black"
                  alignSelf={'center'}
                />
              </View>

              <CreateDivider
            
            borderWidth={0.1}
            borderColor={Colors1.grey}
            dividerWidth={ScreenWidth1(0.8)}
            marginTop={ScreenHeight1(0.02)}
            margin={1}
          />
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize:screenWidth*0.03,
                    marginTop: hp('2.4%'),
                    
                  }}>
                  Location
                </Text>
                <Input
                  inputheight={hp('5.5%')}
                  textColor={'white'}
                  inputwidth={screenWidth * 0.8}
                  inputBackgroundColor={Colors1.transparent}
                  placeholderTextColor="black"
                  alignSelf={'center'}
                />
              </View>
            </TransparentCard>
            <View style={styles.centeredFlatButtons}>
              <FlatButtons
                title={'Save'}
                WidthBtn={screenWidth * 0.85}
                buttonHeight={hp('6%')}
                buttonpad={1}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    // marginTop: hp('2%'),
    // marginBottom: hp('2%'),

  },
  avatarProfile: {position: 'relative'},
  centeredFlatButtons: {
    marginTop: hp('2%'),
    alignItems: 'center',
    marginBottom:hp('3%')
  },
  registerAvatar: {
    // flex: 1,
    alignItems: 'center',
    marginTop: hp('7%'),
  },
  registerCard: {
    // flex: 1,
    padding: hp('1%'),
    // alignItems:'center'
    // backgroundColor:'lightgreen'
  },
  avatarReg: {
    borderRadius: hp('50%'),
    marginBottom: hp('2.5%'),
    height: ScreenWidth1(0.3),
    width: ScreenWidth1(0.3),
  },
  editIconImage: {
    height: hp('2%'),
    // width: hp('3%'),
    resizeMode: 'contain',
  },
  editLowerBound: {
    position: 'absolute',
    bottom: resHeight(5),
    right: resHeight(6),
    backgroundColor: Colors1.lightBlack,
    borderRadius: resWidth(20),
    height: resHeight(43),
    width: resWidth(40),
  },
  editUpperBound: {
    position: 'absolute',
    bottom: resHeight(10),
    right: resWidth(10),
    backgroundColor: Colors1.darkGrey,
    borderRadius: resWidth(25),
    height: resHeight(33),
    width: resWidth(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default EditProfile;
