import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  ActivityIndicator,
  Image,
  Alert,
  StyleSheet

} from 'react-native';
import firebase from 'firebase';
import { Header } from '../components/commonlogin/Header';
import { Card } from '../components/commonlogin/Card';
import { CardSection } from '../components/commonlogin/CardSection';
import { Button } from '../components/commonlogin/Button';
import { Spinner } from '../components/commonlogin/Spinner';
import { Input } from '../components/commonlogin/Input';
import { styles } from '../components/styles';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (

      <Image source={require('../components/images/bglogin.jpg')} style={styles.container}>
      <Image style={styles.logo} source={require('../components/images/logo.png')} />
      <Input
            label="Email"
            placeholder="  Usuario@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}/>

      <Input
            label="Password"
            secureTextEntry
            placeholder="   Contraseña"
            onChangeText={this.onPasswordChange.bind(this)}
            values={this.props.password}/>

      <View style={styles.formContainer}>
      <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
      </View>
      
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 70, height: 50, backgroundColor: 'rgba(0,0,0,0)' }} />
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </View>
    </Image >
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
