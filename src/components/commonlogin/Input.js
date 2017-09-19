import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View >
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
         placeholderTextColor="white"
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};



const styles = {

   inputStyle: {
    height: 30,
    width: 160,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 10,
    textAlign: 'left',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    fontSize: 15
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

