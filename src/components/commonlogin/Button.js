
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
   buttonStyle: {
   backgroundColor: '#45A3D8',
    paddingVertical: 15,
    height: 30,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
   textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },
};

export { Button };