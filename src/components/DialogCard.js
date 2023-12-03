import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import TransparentCard from './cards/CardConst';
import {Colors1} from '../constant/Constants';
import FlatButtons from './FlatsButtons';
import Input from './CustomFields';
import { resHeight } from '../constant/WidthHeight';

const DialogCard = ({isModalVisible,
  toggleModal,
  titleDialogBox,
  BtnText,
  widthBtn,
  buttonpad,
  titleFontSize,
  textFontSize1,
  textFontSize2,
  textFontSize3,
  textContent1,
  textContent2,
  textContent3

}) => {
  const dialogContent={
    // flex:1,
    // backgroundColor:'yellow',
    // width:300,
    justifyContent: 'center', 
    alignItems: 'center' 
  }
  const titleDialog ={
    fontSize:titleFontSize||18,
    color:Colors1.white,
    fontWeight:'bold',

  }
  const text1={
    fontSize:textFontSize1||13,
    color:Colors1.white,
    fontWeight:'bold',

  }
  const text2={
    fontSize:textFontSize2||13,
    color:Colors1.white,
    fontWeight:'bold',
  }
  const text3={
    fontSize:textFontSize3||13,
    color:Colors1.white,
    fontWeight:'bold',
  }

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInUp" 
      animationOut="slideOutDown" 
      onBackdropPress={toggleModal}
    >
      <TransparentCard>
      <View style={dialogContent}>
        {/* Your transparent dialog content goes here */}
        
        <Text style={titleDialog}>{titleDialogBox}</Text>
        <View style={styles.customFields}>
          <Text style={text1}>{textContent1}</Text>
          <View style={styles.field1}>
          <Input inputheight={resHeight(35)}/>
          </View>
          </View>
          <View style={styles.customFields}>
          <Text style={text2}>{textContent2}</Text>
          <View style={styles.field1}>
          <Input inputheight={resHeight(35)}/>
          </View>
          </View>
          <View style={styles.customFields}>
          <Text style={text3}>{textContent3}</Text>
          <View style={styles.field1}>
          <Input inputheight={resHeight(35)}/>
          </View>
          </View>
        
        <FlatButtons onPress={toggleModal} title={BtnText} WidthBtn={widthBtn} buttonpad={buttonpad}/>
        
      </View>
      </TransparentCard>
    </Modal>
  )
}

export default DialogCard

const styles = StyleSheet.create({
    
    title:{

    },
    customFields:{
      
      // flex:1,
      width:250,
      // height:30,
      marginBottom:10,
      flexDirection:'row',
      // backgroundColor:'red',
     justifyContent:'space-between',
     alignContent:'center',
     alignItems:'center'

      
        },
        field1:{
          flex:1,
          left:10,
          bottom:10
        }
  
})