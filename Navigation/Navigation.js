// Navigation/Navigation.js
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { StyleSheet, Image } from 'react-native'
import CityList from '../Components/CityList'
import CategoryList from '../Components/CategoryList'
import PlaceList from '../Components/PlaceList'
import PlaceDetail from '../Components/PlaceDetail'

const SearchStackNavigator = createStackNavigator({
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
/*
const FavStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  },
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    //We integrate the stack navigation in our tab navigation
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
          source={require('../Img/ic_search.png')}
          style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
      }
    }
  },
  Favorites: {
    screen: FavStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../Img/fav_true.png')}
          style={styles.icon}/>
      }
    }
  }
},
{
  tabBarOptions: {
    activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
    showLabel: false, // On masque les titres
    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }
}
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
*/
export default SearchStackNavigator
