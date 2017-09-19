import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {

  container: {
    width: 430,
    height: 900,
    padding: 190
  },
  title: {
    color: '#9E9E9E',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 169,
    height: 105
  },
  input: {
    height: 30,
    width: 180,
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 10,
    textAlign: 'left',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    fontSize: 15
  },
  buttonContainer: {
    backgroundColor: '#45A3D8',
    paddingVertical: 15,
    width: 110,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 11,
  },

  errorTextStyle: {
    width: 210,
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'red',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 10
  }
};
export { styles };
