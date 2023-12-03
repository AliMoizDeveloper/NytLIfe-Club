import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../../components/CommonLayOut'
// import { GlobalStyle } from '../../../Styles/externalStyle'
import {ImageString,Colors1, ScreenWidth1, FontSizes, IconString} from '../../../constant/Constants'
import FlatButtons from '../../../components/FlatsButtons'
import { resHeight, resWidth } from '../../../constant/WidthHeight'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import Colors1 from '../../../constant/constants'

const UploadMedia = () => {
  return (
<BackgroundImage>
    <View style={styles.container}>
    <Image source={ImageString.AvatarUploadIcon} style={styles.avatr}/>
    <Text style={styles.textTitle}>Upload File</Text>
    <Text style={styles.textDes}>You can Upload Image, Music, Video</Text>
    <View style={styles.btns}>
        <FlatButtons title={'Upload Music'} ColMargin={hp('1%')} WidthBtn={ScreenWidth1(0.73)} btnTxtSize={FontSizes.btnTxt20}/>
        <FlatButtons title={'Upload Image'} ColMargin={hp('1%')} WidthBtn={ScreenWidth1(0.73)} btnTxtSize={FontSizes.btnTxt20}/>
        <FlatButtons title={'Upload Video'} ColMargin={hp('1%')} WidthBtn={ScreenWidth1(0.73)} btnTxtSize={FontSizes.btnTxt20}/>
    </View>

    </View>
</BackgroundImage>
  )
}

export default UploadMedia

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'white'
    },
    avatr:{

        height:ScreenWidth1(0.32),
        // backgroundColor:'red',
        width:ScreenWidth1(0.5),
        // (Dimensions.get('window').width<400)?150:100,
        // marginBottom:resHeight(10)
    },
    textTitle:{
        marginVertical:resHeight(10),
        color:Colors1.white,
        fontSize:FontSizes.FS30,
        fontWeight:'bold',
        
        
    },
    textDes:{
        color:Colors1.white,
        fontSize:FontSizes.FS15,
    },
    btns:{

        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor: 'red'
    }
})