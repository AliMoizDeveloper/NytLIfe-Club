import { StyleSheet } from 'react-native'
import { resWidth, resHeight } from '../constant/WidthHeight'
import {Colors1} from '../constant/Constants';
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen';

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: resHeight(30),
    // alignItems:'center',
    // alignContent:'center'
    // justifyContent:'center'
  },

});
const Style1Text=StyleSheet.create({
  Text12: {},
  Text12Bold: {
    paddingLeft: 2, 
    fontWeight: 'bold', 
    color: Colors1.themeColor, 
    color: "white"
  }
})
const HeaderTitle = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:hp('8%'),
    paddingHorizontal:wp('4%')
  },
  cardContent:{
    paddingTop:hp('1.5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:wp('4%'),

    // backgroundColor:'red'
  },
  contentContainer: {
    // flex:1,
    paddingTop:hp('1%'),
    paddingHorizontal:wp('4%')
  },
  androidContainer: {
    flex:1,
    paddingTop:hp('3%'),
    paddingHorizontal:wp('4%')
  },



  

});

const RegisterLoginStyle = StyleSheet.create({

  titleContain: {

    // backgroundColor:'red'
  },
  bannerContain: {
    flex: 1,
    // justifyContent: 'center',
    alignItems:'center',
    // backgroundColor:'red'
  },
  buttonContain: {
    flex: 1,
    justifyContent: 'center',

  },
  buttonWrapper: {
    marginVertical: resWidth(10),
  },

  text1: {
    fontSize: resWidth(24),
    color: 'white',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: resHeight(30),
    color: 'white',
  },
  text3: {
    // flex:.1,
    fontSize: resHeight(20),
    // backgroundColor:'yellow',
    color: 'white',
    paddingTop: resHeight(10),
    fontWeight: 'bold',
    textAlign: 'center',

  },
  text4: {
// flex:.3,
fontSize:resWidth(15),
    color: 'white',
    textAlign: 'center',
    // backgroundColor:'pink'
  },
  registerbanner: {
    // flex:1,
    borderRadius: resHeight(16),
    width: '100%',
    height:'80%'
  }

});

export {
  GlobalStyle,
  RegisterLoginStyle,
  HeaderTitle
}