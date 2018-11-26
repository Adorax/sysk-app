// Components/FilmList.js

import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CategoryItem } from './CategoryItem';
import { connect } from 'react-redux';
import { getCategoriesOfCity } from '../API/SYSKApi';


class CategoryList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: [], isLoading: false, }
  }

  _loadCities = () => {
      this.setState({ isLoading : true });
      getCategoriesOfCity(this.props.nameCity).then(data => {
        this.setState({
          categories: [ ...data.results ],
          isLoading : false //Stop loading page
        })
      })
  }

  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
          </View>
        )
      }
  }

  _displayPlaces = (linkCity, nameCity, linkCat, categoryName) => {
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    //this.props.navigation.navigate('PlaceList', {linkCity: linkCity, nameCity: nameCity, linkCat: linkCat, categoryName: categoryName})
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          style={styles.list}
          data={this.state.categories}
          keyExtractor={(item) => item.toString()}
          renderItem={({item}) => (
            <CategoryItem
              category={item}
              onClicItem={this._displayPlaces}
            />
          )}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    main_container: {
      flex: 1
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    list: {
        flex: 1
    },
  })


const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(CategoryList)
