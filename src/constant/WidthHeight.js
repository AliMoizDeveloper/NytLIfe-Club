import {Dimensions} from 'react-native'

const heightMobileUI = 896;
const widthMobileUI = 414;

    export const resWidth = width => {
    return (Dimensions.get('window').width * width) / widthMobileUI;
  };
  
  export const resHeight = height => {
    return (Dimensions.get('window').height * height) / heightMobileUI;
  };
  export const resFont = size => {
  // You can adjust this factor based on your design preferences
  // For example, if you want text to be 2% of the screen width, you can use 0.02 as the factor
  const factor = 0.02;

  return resWidth(size * factor);
};



//   import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-screen';

// // Example usage:
// const myStyle = {
//   width: responsiveWidth(50),        // 50% of the screen width
//   height: responsiveHeight(20),      // 20% of the screen height
//   fontSize: responsiveFontSize(16),  // Responsive font size
// };
