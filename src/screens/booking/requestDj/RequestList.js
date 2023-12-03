

import React from 'react';
import {  FlatList, Dimensions } from 'react-native';
import {ImageString} from '../../../constant/Constants';
import BookingRequestCard from '../../../components/cards/BookingRequestCard';
import BackgroundImage from '../../../components/CommonLayOut';
import { resHeight, resWidth } from '../../../constant/WidthHeight';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'


const screenwidth = Dimensions.get('window').width;
const data = [
  {
    id: '1',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ Groovemaster',
    description: 'Event Type: Nightclub Performance',
    description1: 'Rate Per Hour: $100',
    description2: 'Genres of Music: EDM, House, Techno',
  },
  {
    id: '2',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: 'Event Type: Private Party',
    description1: 'Rate Per Hour: $80',
    description2: 'Genres of Music: Hip-Hop, R&B, Reggae',
  },
  {
    id: '3',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ ElectroBeats',
    description: 'Event Type: Music Festival',
    description1: 'Rate Per Hour: $120',
    description2: 'Genres of Music: Electro, Trance, Progressive House',
  },
  {
    id: '4',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ RockStar',
    description: 'Event Type: Live Concert',
    description1: 'Rate Per Hour: $150',
    description2: 'GGenres of Music: Rock, Alternative, Metal',
  },
  {
    id: '5',
    imgAvatar: ImageString.Avatar_ImageReg, // Provide the actual image path
    title: 'DJ VinylVibes',
    description: 'Event Type: Private Party',
    description1: 'Rate Per Hour: $80',
    description2: 'Genres of Music: Hip-Hop, R&B, Reggae',
  },
  // Add more data items as needed
];

const RequestList = () => {
  const renderItem = ({ item }) => (
    <BookingRequestCard
      imgAvatar={item.imgAvatar}
      
      buttonHeight1={screenwidth*0.1}
      buttonHeight2={screenwidth*0.1}
      title={item.title}
      description={item.description}
      description1={item.description1}
      description2={item.description2}
      buttonText1={'Accept'}
      buttonText2={'Delete'}
      isRightBtn={true}
      WidthBtn1={resWidth(100)}
      WidthBtn2={resWidth(100)}
      buttonpad1={resHeight(1)}
      buttonpad2={resHeight(1)}
      onButton1Press={() => handleButton1Press(item.id)}
      onButton2Press={() => handleButton2Press(item.id)}
    />
  );

  const handleButton1Press = (id) => {
    // Handle button 1 press for the specific item with the given 'id'
    console.log('Accept')
  };

  const handleButton2Press = (id) => {
    console.log('Delete')
    // Handle button 2 press for the specific item with the given 'id'
  };

  return (
    <BackgroundImage>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </BackgroundImage>
  );
};

export default RequestList;
