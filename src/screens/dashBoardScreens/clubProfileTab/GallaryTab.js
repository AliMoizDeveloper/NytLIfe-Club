import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  ScrollView, // Import ScrollView
} from 'react-native';
// import { ScrollView } from 'react-native-virtualized-view'

const GallaryTab = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(10)).map((v, i) => {
      return {
        id: i,
        src: 'https://unsplash.it/400/400?image=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1,
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{ uri: item.src }}
            />
          </View>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default GallaryTab;


// import { View, Text } from 'react-native'
// import React from 'react'
// import FlatButtons from '../../../components/flatsButtons'
// import NavigationString from '../../../constants/navigationString'

// const GallaryTab = ({navigation}) => {
//   return (
//     <View>
//       <Text>GallaryTab</Text>
//       <FlatButtons title={'Club Chat'} onPress={()=>navigation.navigate(NavigationString.Club_List)} WidthBtn={200}/>
//     </View>
//   )
// }

// export default GallaryTab