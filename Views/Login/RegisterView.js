import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { addUser } from '../../API/SYSKApi'
import { Header, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.username = "";
    this.password = "";
    this.email = "";
    this.rptPwd = "";
    this.state = { login: '', isLoading: false, ckPwd: true};
  }

  _storeLogin = async (login) => {
      //Store all rate of this user on redux
      try {
          console.log(login);
          await AsyncStorage.setItem("login", login.username);
          this.setState({isLoading: false})
      } catch (error) {
          console.log(error);
      }
  }

  _register = () => {
    if (this._checkInfo) {
      this.setState({isLoading: true})
      const credential = { email: this.email, username: this.username, passwordHash: this.password };
      addUser(credential).then(user => {
        if (user.username) {
          this._storeLogin(user);
        } else {
          Alert.alert("Oops, something went wrong!", "We can not create this user. Are you sure these informations are correct ?")
          this.setState({isLoading: false})
        }
      }).catch(err => console.error(err))
    } else {
      Alert.alert("Incorrect information", "Email, username or password are not valid");
    }
  }

  _isUserConnected = async () => {
      try {
          const value = await AsyncStorage.getItem("login");
          if (value) {
            this.props.navigation.navigate('CityList');
          }
      } catch (error) {
           console.log(error);
      }
  }

  _displayErrorPwd() {
    if (!this.state.ckPwd) {
      return (<FormValidationMessage>Passwords are not the same</FormValidationMessage>)
    }
  }

  _checkPwd = () => {
    this.setState({ckPwd : this.password === this.rptPwd});
  }


  _checkInfo = () => {
    if (this.email.length > 7 && this.username.length > 2 && this.password.length > 3 && this.password === this.rptPwd) {
      return true;
    }
    return false
  }

  render() {
      this._isUserConnected()
      return (
        <View style={{flex: 1}}>
          <Header
            centerComponent={{ text: 'Fill your informations', style: { color: '#fff' } }}
          />
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={(text) =>  {this.email = text} } />
            <FormLabel>Username</FormLabel>
            <FormInput onChangeText={(text) =>  {this.username = text} } />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry onChangeText={(text) => {this.password = text; this._checkPwd()} } />
            <FormLabel>Repeat password</FormLabel>
            <FormInput secureTextEntry onChangeText={(text) => {this.rptPwd = text; this._checkPwd()} } />
            {this._displayErrorPwd()}
            <Button
              title="Save"
              loading={this.state.isLoading}
              loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(75, 0, 0, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={this._register}
              icon={{ name: 'send' }}
              disabled={!this._checkInfo()}
            />
          </View>
        </View>
      );
  }
}
