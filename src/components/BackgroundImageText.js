import { ImageBackground } from 'react-native'
import React from 'react'

const BackgroundImageText = ({resizeImg,img,cardWidth,cardHeight,borderRad,children}) => {
  return (
    <ImageBackground resizeMode={resizeImg} borderRadius={borderRad} source={img} style={{width:cardWidth,height:cardHeight}}>
      {children}
    </ImageBackground>
  )
}

export default BackgroundImageText

// const styles = StyleSheet.create({


// })