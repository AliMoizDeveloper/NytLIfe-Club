import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Colors1 } from '../constant/Constants';
import { resHeight } from '../constant/WidthHeight';

const DateInputField = ({
    inputheight,
    inputBackgroundColor,
    placeHolder
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  return (
    <View style={{    
        marginTop:resHeight(20),
        borderRadius:12,
        backgroundColor: Colors1.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        backgroundColor:inputBackgroundColor || Colors1.white,//'rgba(52, 52, 52, 0.3)'
        height: inputheight || 40,
        }}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        onFocus={showDatePicker}
      />
      {/* <Button title="Pick a date" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        renderHeader={(props) => (
            <View style={styles.customHeaderContainer}>
              <Text style={styles.customHeaderText}>Custom Header</Text>
              <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.customHeaderCancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        headerTextIOS="Pick a Date"
        headerTextAndroid="Date"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color:Colors1.black , marginRight:'auto',flex:1
  },
  datePickerContainer: {
    flex:1,
    backgroundColor: Colors1.black,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  customHeaderContainer: {
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  customHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  customHeaderCancelText: {
    color: 'red',
  },
  customButtonText: {
    color: 'blue',
    fontSize: 16,
  },

});

export default DateInputField;
