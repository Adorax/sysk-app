// Navigation/Navigation.js
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import CityList from '../Components/CityList'
import CategoryList from '../Components/CategoryList'
import PlaceList from '../Components/PlaceList'
import PlaceDetail from '../Components/PlaceDetail'
import LoginView from '../Views/Login/LoginView'
import RegisterView from '../Views/Login/RegisterView'

const LoginTabNavigator = createBottomTabNavigator({
   Login: {
    screen: LoginView,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Img/login.png')}
          style={styles.icon}/>
      }
    }
  },
  Register: {
    screen: RegisterView,
    navigationOptions: {
      title: 'Register',
      tabBarIcon: () => {
        return <Image
          source={require('../Img/register.png')}
          style={styles.icon}/>
      }
    }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    showLabel: true, // On masque les titres
    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }
}
)

const SearchStackNavigator = createStackNavigator({
  Login: {
    screen: LoginTabNavigator,
    navigationOptions: {
      header: null

    }
  },
  CityList: {
    screen: CityList,
    navigationOptions: {
      title: 'Cities'
    }
  },
  CategoryList: {
    screen: CategoryList,
    navigationOptions: {
      title: 'Categories'
    }
  },
  PlaceList: {
    screen: PlaceList,
    navigationOptions: {
      title: 'Places'
    }
  },
  PlaceDetail: {
    screen: PlaceDetail,
    navigationOptions: {
      title: 'Detail'
    }
  },
})


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default SearchStackNavigator
