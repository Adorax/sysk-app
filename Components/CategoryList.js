// Components/FilmList.js

import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { CategoryItem } from './CategoryItem';
import { connect } from 'react-redux';
import { getCategoriesOfCity } from '../API/SYSKApi';


class CategoryList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { categories: [], isLoading: true, }
    this._loadCategory();
  }

  _loadCategory = () => {
      getCategoriesOfCity(this.props.navigation.state.params.nameCity).then(data => {
        this.setState({
          categories: data,
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

  _displayPlaces = (/*linkCat, */categoryName) => {
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    this.props.navigation.navigate('PlaceList', {linkCity: this.props.linkCity, nameCity: this.props.nameCity, categoryName: categoryName})
  }

  render() {
    console.log(this.state.categories);
    const { linkCity, nameCity } = this.props
    return (
      <View style={styles.main_container}>
        <FlatList
          style={styles.list}
          data={this.state.categories}
          keyExtractor={(item, index) => item.toString() }
          renderItem={({item}) => (
            <CategoryItem
              category={item}
              onClicItem={this._displayPlaces}
            />
          )}
          numColumns={2}
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
