import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const TransparentCard = ({ children,borderRadius,cardWidth,cardHorizontal }) => {
  return (
    <View style={[styles.card,{
      width:cardWidth,
      borderRadius: borderRadius||heightPercentageToDP('3%'),
      marginHorizontal: cardHorizontal||16,
      }]}>
{children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(52, 52, 52, 0.3)', 
    // opacity:0.2,
    
    padding: 16,
    
    marginTop:16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
});

export default TransparentCard;


