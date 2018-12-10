import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { checkLogin } from '../../API/SYSKApi'
import { Header, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class LoginView extends React.Component {

  constructor(props) {
    super(props);
    this.username = "";
    this.password = "";
    this.state = { login: '', isLoading: false };
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

  _login = () => {
      this.setState({isLoading: true})
      const credential = { username: this.username, password: this.password };
      checkLogin(credential).then(user => {
        if (user.username) {
          this._storeLogin(user);
        } else {
          Alert.alert("Error", "Wrong credentials, please try again.")
          this.setState({isLoading: false})
        }
      }).catch(err => console.error(err))
  }

//make this funciton exportable


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

  render() {
    this._isUserConnected()
      return (
        <View style={{flex: 1}}>
          <ImageBackground source={require('../../Img/SYSK-Logo.png')} style={{flex: 11}}>
          </ImageBackground>
          <View style={{flex:9, justifyContent: 'space-around'}}>
            <FormLabel>Username</FormLabel>
            <FormInput onChangeText={(text) =>  {this.username = text} } />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry onChangeText={(text) => this.password = text } />
            <Button
              title="Login"
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
              onPress={this._login}
              icon={{ name: 'send' }}
            />
          </View>
        </View>
      );
  }
}

export const signOut = () => {
    AsyncStorage.removeItem("login");
}
