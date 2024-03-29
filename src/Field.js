import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 30, width: '95%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 15}}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
