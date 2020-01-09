/* eslint-disable react-native/no-inline-styles */
// ===============================
// AUTHOR     : SOUMYA RANJAN NAYAK
// CREATE DATE     :09/01/2020
// PURPOSE     : Login
// ===============================
// Change History:
//
//==================================

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,

} from 'react-native';
import {emailChanged, passwordChange, onLogin} from '../actions';
import {connect} from 'react-redux';
import {validateUserNameAndPassword} from '../business/LoginBusiness';

class ReduxSample extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPaswordChange(text) {
    this.props.passwordChange(text);
  }

  onLoginPress() {
    const {email, password} = this.props;
    let isValidate = validateUserNameAndPassword(email, password);
    isValidate == true
      ? this.props.onLogin(email, password)
      : Alert.alert('', isValidate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../imgs/background.png')} />
        <View style={styles.dialogContainer}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            Log In
          </Text>

          <View
            style={{
              marginTop: 30,
              width: '100%',
              alignItem: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.loginFieldtitle}>User Name</Text>
            <TextInput
              value={this.props.email}
              onChangeText={uEmail => this.onEmailChange(uEmail)}
              placeholder={'Username'}
              style={styles.input}
            />
            <Text style={styles.loginFieldtitle}>Password</Text>
            <TextInput
              value={this.props.password}
              onChangeText={uPassword => this.onPaswordChange(uPassword)}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />

            {this.props.loading ? (
              <ActivityIndicator size="large" color="#a82b2d" />
            ) : (
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => this.onLoginPress()} //Actions.TrainingTrackingForm()
              >
                <Text
                  style={{
                    textShadowColor:'#fff',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle:'italic',
                  }}>
                  Log In
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  // email:auth.state.email;
  const {email, password, loading} = auth;
  return {email, password, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChange,
  onLogin,
})(ReduxSample);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 6,
    color:'#fff'
  },
  dialogContainer: {
    position:'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
   
  },
  loginFieldtitle: {color: '#fff', fontWeight: 'bold', fontSize: 13},
  loginButton: {
    backgroundColor: '#ac4051',
    width: '100%',
    height: 40,
    marginTop: 5,
    borderWidth: 0.5,
    borderColor: '#ac4051',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
