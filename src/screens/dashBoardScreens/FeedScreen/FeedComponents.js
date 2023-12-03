import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import TransparentCard from '../../../components/cards/CardConst'
import ChatHeader from '../../../components/ChatHeader'
import { Colors1, FontSizes, IconString, ImageString, ScreenWidth1 } from '../../../constant/Constants'
import CreateDivider from '../../../components/DividerConst'
import { resHeight, resWidth } from '../../../constant/WidthHeight'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Screen } from 'react-native-screens'

const FeedComponents = () => {
  return (
    <TransparentCard cardHorizontal={widthPercentageToDP('0.3%')}>
            <ChatHeader
              Img={ImageString.Club_DashBoard_BackImage}
              imgHeigth={ScreenWidth1(0.18)}
              imgWidth={ScreenWidth1(0.18)}
              isRow={false}
              textColumn1={'Disco Club'}
              textColumn2={'2 hr'}
              rtmrgn={ScreenWidth1(0.04)}
              fontSize1={FontSizes.FS20}
              fontSize2={FontSizes.FS15}
            />
            <Text style={texts.commentCardText}>
              I got so lost in the dancing crowd and the loud music that I found
              good friends and great memories.
            </Text>
            <Image
              source={ImageString.Banner_Image}
              style={styles.commentImage}
            />
            <View style={styles.likeComment}>
              <View style={styles.countLikes}>
                <View style={styles.circleBackgroundLike}>
                  <Image
                    source={IconString.Like_Icon}
                    style={styles.likeImage}
                  />
                </View>
                <Text style={texts.likeText}>123</Text>
              </View>
              <Text style={texts.likeText}>13 Comments</Text>
            </View>
            <CreateDivider
              dividerWidth={ScreenWidth1(0.8)}
              margin={1}
              borderWidth={0.1}
              borderColor={Colors1.grey}
            />
            <View style={styles.likeCmmentShareContainer}>
              <View style={[styles.likeCmntSharBtn, {borderRightWidth: 0.8}]}>
                <Image
                  source={IconString.LikeIcon}
                  style={styles.commnetCardbtnImage}
                />
                <Text style={{color: Colors1.white}}>Like</Text>
              </View>
              <View
                style={[
                  styles.likeCmntSharBtn,
                  {flex: 1.5, borderRightWidth: 0.8},
                ]}>
                <Image
                  source={IconString.CommentIcon}
                  style={styles.commnetCardbtnImage}
                />
                <Text style={{color: Colors1.white}}>Comments</Text>
              </View>
              <View style={[styles.likeCmntSharBtn]}>
                <Image
                  source={IconString.Share_Icon}
                  style={styles.commnetCardbtnImage}
                />
                <Text style={{color: Colors1.white}}>Share</Text>
              </View>
            </View>
          </TransparentCard>
  )
}



const styles = StyleSheet.create({
      commentImage: {
        height: ScreenWidth1(0.68),
        width:ScreenWidth1(0.8),
        // width: widthPercentageToDP('75%'),
        marginBottom: widthPercentageToDP('2%'),
        borderRadius: widthPercentageToDP('4%'),
      },
      likeComment: {
        // flex:1,
        flexDirection: 'row',
        marginBottom: resHeight(20),
        justifyContent: 'space-between',
        // backgroundColor:'green'
      },
      countLikes: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
      },
      circleBackgroundLike: {
        backgroundColor: Colors1.grey,
        justifyContent: 'center',
        alignItems: 'center',
        width: resWidth(20),
        height: resHeight(20),
        borderRadius: resWidth(10),
        marginRight: resWidth(5),
      },
      likeImage: {
        height: resHeight(15),
        width: resWidth(15),
      },
      likeCmmentShareContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: resWidth(6),
        borderWidth: 0.5,
        marginTop: resHeight(12),
        height: resHeight(30),
        borderColor: Colors1.themeColor,
        // marginBottom: 50,
      },
      likeCmntSharBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors1.themeColor,
      },
      commnetCardbtnImage: {
        height: resHeight(15),
        width: resWidth(15),
        marginRight: resWidth(5),
      },
})

const texts = StyleSheet.create({
    commentCardText: {
      paddingVertical: resHeight(10),
      fontSize: heightPercentageToDP('1.5%'),
      color: Colors1.white,
    },
    likeText: {
      color: Colors1.white,
      fontSize: resWidth(12),
    },
  });

export default FeedComponents