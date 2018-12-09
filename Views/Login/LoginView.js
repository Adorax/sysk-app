import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import { checkLogin } from '../../API/SYSKApi'
import { Header, FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


export default class LoginView extends React.Component {
  //static navigationOptions= { title: 'Login',};

  constructor(props) {
    super(props);
    this.state = {
        credential: {username: '', password: ''}, login: '', isLoading: false
    };
  }

  _storeLogin = async (login) => {
      try {
          console.log(login.username);
          await AsyncStorage.setItem("login", login.Username);
          this.setState({isLoading: false})
      } catch (error) {
          console.log(error);
      }
  }

  _login = () => {
      this.setState({isLoading: true})
      const credential = { username: this.state.credential.username, password: this.state.credential.password };
      checkLogin(this.state.credential).then(user => {
        if (user.username) {
          this._storeLogin(user);
        } else {
          Alert.alert("Error", "Wrong credentials, please try again.")
          this.setState({isLoading: false})
        }
      }).catch(err => console.error(err))
  }

//make this funciton exportable
  logout = () => {
      AsyncStorage.removeItem("login");
      this.render();
  }

  _isUserConnected = async () => {
      try {
          const value = await AsyncStorage.getItem("login");
              this.setState({ login: value });
              if (value) {
                this.props.navigation.navigate('Cities');
              }
      } catch (error) {
           console.log(error);
      }
  }

  navigateHome = () => {
      this.props.navigation.navigate('Cities')
  }


  render() {
    this._isUserConnected()
    console.log(this.state.credential);
      return (
        <View style={{flex: 1}}>
          <ImageBackground source={require('../../Img/SYSK-Logo.png')} style={{flex: 11}}>
          </ImageBackground>
          <View style={{flex:9, justifyContent: 'space-around'}}>
            <FormLabel>Username</FormLabel>
            <FormInput onChangeText={(text) => this.setState({ credential :{ username: text, password: this.state.credential.password} })} value={this.state.credential.username} />
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={(text) => this.setState({ credential :{ username: this.state.credential.username, password: text} })} value={this.state.credential.password} />
            <Button
              title="LOADING BUTTON"
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

//  <Button rounded icon={{ name: 'send' }}  title="Login" />
