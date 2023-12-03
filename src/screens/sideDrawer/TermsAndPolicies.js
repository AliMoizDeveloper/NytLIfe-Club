import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBackground from '../../components/CommonLayOut';
import TitleHeading from '../../components/TitleAppBarIcons';
import TransparentCard from '../../components/cards/CardConst';
import CustomTitle from '../../components/TitleHeader';
import CreateDivider from '../../components/DividerConst';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors1, IconString} from '../../constant/Constants';
const screenWidth = Dimensions.get('window').width;

const TermsAndPolicies = ({navigation}) => {
  return (
    <ImageBackground justifyContent={'flex-start'}>
      <View style={styles.AppBar}>
        <TitleHeading
          isText={true}
          title={'Term And Condition'}
          fontWeight={'500'}
          fontSize={hp('2.8%')}
          isrightIcon1={true}
          isleftIcon={true}
          leftIcon1={IconString.Go_Back}
          // fontWeight={'bold'}
          pressIconleft={() => navigation.goBack()}
        />
      </View>
      <ScrollView 
      style={{padding:hp('2%')}}
      showsVerticalScrollIndicator>
      <TransparentCard>
        <Text style={styles.titleHeader}>NiteLyfe - Terms and Conditions</Text>
        <Text style={styles.DiscriptText}>
          These Terms and Conditions ("Terms") govern your use of the NiteLyfe
          music application and services. By using NiteLyfe, you agree to these
          Terms. If you do not agree with these Terms, please do not use the
          application
        </Text>
        <CustomTitle
          textColumn1="1. Acceptance of Terms"
          textColumn2="You must be at least 18 years old to use NiteLyfe. By using the application, you confirm that you
          meet this age requirement"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          marginBtom={3}
          // margin={4}
          borderWidth={0.3}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="2. User Accounts"
          textColumn2="You are responsible for maintaining the confidentiality of your account information, including 
          your username and password.
          You are responsible for all activities that occur under your account.
          You agree to provide accurate and current information when creating your account."
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ?wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="3. Content"
          textColumn2="NiteLyfe may include user-generated content. We are not responsible for the accuracy, 
          completeness, or legality of such content.
          You agree not to upload, share, or use any content that violates intellectual property rights, 
          privacy, or any applicable laws"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          //  margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="4. Service Usage"
          textColumn2="NiteLyfe may periodically update or change its services, which may include adding, modifying, 
          or discontinuing features.
          You agree not to use NiteLyfe for any unlawful purposes or in a way that may harm the 
          application or its users"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="5. Payment and Subscriptions"
          textColumn2="NiteLyfe may offer premium features or subscription plans. By subscribing, you agree to the 
          associated payment terms.
          Subscriptions may be auto-renewed unless canceled by you."
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
                <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="6. Privacy"
          textColumn2="Your use of NiteLyfe is subject to our Privacy Policy, which outlines how your data is collected, 
          used, and protected"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
                <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="7. Termination"
          textColumn2="NiteLyfe reserves the right to suspend or terminate your account for any violation of these 
          Terms"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
                        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="8. Disclaimers"
          textColumn2="NiteLyfe is provided as is. We do not guarantee uninterrupted, error-free, or secure access to 
          the application.We are not responsible for any loss or damage resulting from the use of NiteLyfe."
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
                        <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ? wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="9. Indemnification"
          textColumn2="You agree to indemnify and hold NiteLyfe, its affiliates, and employees harmless from any 
          claims, losses, or damages arising from your use of the application"
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
        />
          <CreateDivider
          dividerWidth={
            Dimensions.get('window').width > 768 ?wp('80%') : wp('70%')
          }
          // margin={1}
          marginBtom={3}
          borderWidth={0.1}
          borderColor={Colors1.grey}
        />
        <CustomTitle
          textColumn1="10. Governing Law"
          textColumn2="These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]."
          fontWeight1={500}
          fontSize1={hp('2.6%')}
          fontSize2={hp('1.9%')}
          marginBottom1={hp('1%')}
          marginBottom2={screenWidth*0.04}
        />
      </TransparentCard>
      </ScrollView>
    </ImageBackground>
  );
};

export default TermsAndPolicies;

const styles = StyleSheet.create({
  AppBar: {
    marginTop: hp('4%'),
    padding: hp('2%'),
  },
  titleHeader: {
    fontSize: hp('2.7%'),
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors1.white,
    marginBottom: hp('1.5%'),
    textDecorationLine: 'underline',
    fontWeight: '700',
  },
  DiscriptText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors1.white,
    marginBottom: hp('1.5%'),
    fontSize: hp('1.9%'),
    textDecorationLine: 'none',
    fontWeight: '300',
  },
});
