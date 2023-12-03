import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TransparentCard from './cards/CardConst';

const CustomDropdown = ({
  options,
  onSelect,
  title,
  onPress,
  backgroundColor,
  textColor,
  disabled,
  border_color,
  transparentBorder,
  ColMargin,
  rtMarg,
  WidthBtn,
  iconSource,
  showIcon,
  buttonpad,
  buttonHeight,
  btnTxtSize,
  border_width,
  border_padding,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = option => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={{width: WidthBtn, alignSelf: 'center'}}>
      <TransparentCard>
        <TouchableOpacity
          onPress={toggleDropdown}
          style={[
            {
              borderColor: border_color,
              borderWidth: border_width,
              padding: border_padding,
            },
          ]}>
          <Text style={{color: textColor, fontWeight: 'bold'}}>
            {selectedOption || title}
          </Text>
        </TouchableOpacity>

        {isOpen && (
          <FlatList
            data={options}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleSelectOption(item.value)}
                style={[
                  {
                    borderColor: border_color,
                    borderWidth: transparentBorder ? 0 : 1,
                    borderWidth: border_width,
                    padding: border_padding,
                  },
                ]}>
                <Text style={{color: textColor, fontSize: btnTxtSize}}>
                  {item.label}
                </Text>
                {showIcon && (
                  <Image
                    source={iconSource}
                    style={{height: 20, width: 20, marginRight: 5}}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        )}
      </TransparentCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomDropdown;
