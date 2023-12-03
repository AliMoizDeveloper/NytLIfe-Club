import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatButtons from '../../components/FlatsButtons'
import { Colors1, NavigationString } from '../../constant/Constants'

const PaymentScr = ({navigation}) => {
  return (
    <View style={{backgroundColor:Colors1.black, flex:1, justifyContent:'center', padding:20}}>
      <FlatButtons title={'Received Payment'} onPress={()=>navigation.navigate(NavigationString.ReceivedPayments)}  ColMargin={20}/>
      <FlatButtons title={'Pending Payment'} onPress={()=>navigation.navigate(NavigationString.PendingPayments)}/>
    </View>
  )
}

export default PaymentScr

const styles = StyleSheet.create({})