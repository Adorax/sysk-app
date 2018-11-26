// Components/FilmList.js

import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import CityItem from './CityItem';
import { connect } from 'react-redux';
import { getAllCities } from '../API/SYSKApi';


class CityList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], isLoading: true, }
    this._loadCities();
  }

  _loadCities = () => {
      getAllCities().then(data => {
        this.setState({
          cities: data._embedded.cities,
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

  _displayCategory = (linkCity, nameCity) => {
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    this.props.navigation.navigate('CategoryList', {linkCity: linkCity, nameCity: nameCity});
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          style={styles.list}
          data={this.state.cities}
          keyExtractor={(item, index) => item.nameCity }
          renderItem={({item}) => (
            <CityItem
              city={item}
              onClicItem={this._displayCategory}
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

export default connect(mapStateToProps)(CityList)
