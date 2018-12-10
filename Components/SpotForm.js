import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { addUser } from '../API/SYSKApi'
import { Header, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Tags from "react-native-tags"

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
      return (
        <View style={{flex: 1}}>
          <Header
            centerComponent={{ text: 'Add a new spot', style: { color: '#fff' } }}
          />
          <View style={{flex: 1, justifyContent: 'space-around'}}>
            <FormLabel>Name of the spot</FormLabel>
            <FormInput onChangeText={(text) =>  {this.namePlace = text} } />
            <FormLabel>Address</FormLabel>
            <FormInput onChangeText={(text) =>  {this.address = text} } />
            <FormLabel>City</FormLabel>
            <FormInput value={this.props.navigation.state.params.nameCity} disabled />
            <FormLabel>Description</FormLabel>
            <FormInput onChangeText={(text) =>  {this.description = text} } />
            <FormLabel>Category</FormLabel>
            <Tags
              textInputProps={{
                placeholder: "Category"
              }}
              containerStyle={{ justifyContent: "center" }}
              deleteTagOnPress={true}
              readonly={false}
            />
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
