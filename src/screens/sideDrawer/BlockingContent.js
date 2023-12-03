import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {
  Colors1,
  IconString,
  ImageString,
  NavigationString,
  
} from '../../constant/Constants';
import ImageBackground from '../../components/CommonLayOut';
import {resHeight, resWidth} from '../../constant/WidthHeight';
import TitleHeading from '../../components/TitleAppBarIcons';
import TransparentCard from '../../components/cards/CardConst';
import {TextInput} from 'react-native-paper';
import FlatButtons from '../../components/FlatsButtons';


const screenWidth = Dimensions.get('window').width;
const BlockingContent = ({navigation}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [error, setError] = React.useState(false);
  const handleTextInputChange = text => {
    // You can add your validation logic here to determine if there is an error
    // For example, checking if the input is empty.
    if (text.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = () => {
    // You can add your submission logic here
    if (error) {
      // Handle the error state, e.g., show an error message or prevent submission
      console.log('Error: Please fix the input');
    } else {
      // Handle the successful submission
      console.log('Submitting the report');
      // You can navigate back or perform any other actions here
    }
  };
  // const handleUnfocus = () => {
  //   Keyboard.dismiss(); // This will dismiss the keyboard and unfocus the TextInput
  //   setIsFocused(false);
  // };
  

  return (
   
      <ScrollView style={{flex:1, backgroundColor:Colors1.black}}>
      <ImageBackground justifyContent={'flex-start'}>
        <View style={styles.AppBar}>
          <TitleHeading
            isText={true}
            //   title={'Settings'}
            //   fontWeight={'500'}
            //   fontSize={resWidth(20)}
            isrightIcon1={true}
            isleftIcon={true}
            leftIcon1={'chevron-back'}
            // fontWeight={'bold'}
            pressIconleft={() => navigation.goBack()}
          />
        </View>
        <View style={[styles.container]}>
          <Image resizeMode='contain' source={IconString.AlertIcon} style={styles.imgAlert} />
          <Text style={styles.textTitle}>Report A Problem</Text>
          <Text style={styles.textDiscript}>
            Please don't hesitate to reach out, as we are here to provide the
            support and solutions you need
          </Text>
          <TransparentCard>
            <View style={styles.cardReport}>
              <View style={styles.inputTextContainer}>
                <TextInput
                  style={styles.reportInput}
                  multiline={true}
                  cursorColor={Colors1.themeColor}
                  numberOfLines={4}
                  textAlignVertical="top"
                />
              </View>
              <FlatButtons
                title={'Submit'}
                WidthBtn={resWidth(180)}
                buttonHeight={resHeight(50)}
                buttonpad={1}
                onPress={handleSubmit}
              />
            </View>
          </TransparentCard>
        </View>
      </ImageBackground>
      </ScrollView>
    
  );
};

export default BlockingContent;

const styles = StyleSheet.create({
  AppBar: {
    // flex:1,
    marginTop: resHeight(50),
    marginBottom: resHeight(20),
  },
  container: {
    padding: resHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  paragraph: {
    color: Colors1.white,
    padding: 16,
    fontSize: 25,
    fontWeight: 'bold',
    //   textAlign: 'center',
  },
  rowDrawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: resHeight(10),
  },
  drawerIconContent: {width: resWidth(30), height: resHeight(30)},
  drawerTextContent: {
    color: Colors1.white,
    fontSize: resWidth(22),
    fontWeight: '300',
    marginLeft: resWidth(10),
  },
  imgAlert: {width: screenWidth*0.4, height: screenWidth*0.4},
  textTitle: {
    color: Colors1.white,
    marginTop: resHeight(80),
    fontSize: screenWidth*0.05,
    fontWeight: '700',
  },
  textDiscript: {
    marginTop: resHeight(10),
    textAlign: 'center',
    color: Colors1.white,
    fontSize: screenWidth*0.03,
  },
  cardReport: {justifyContent: 'center', alignItems: 'center'},
  inputTextContainer: {height: resHeight(200), width: resWidth(300)},
  reportInput: {
    borderRadius: resHeight(20),
    backgroundColor: Colors1.themeColorOpacity,
    borderWidth: 0.8,
    borderColor: Colors1.themeColor,
    
    height:screenWidth*0.2,
    color:Colors1.white,
    // borderColor: error
    // ? Colors1.red
    // : isFocused
    // ? Colors1.themeColor
    // : Colors1.light,
  },
});
