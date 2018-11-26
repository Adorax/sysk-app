// Components/FilmList.js

import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import PlaceItem from './PlaceItem';
import { connect } from 'react-redux';
import { getPlacesOfCityAndCat } from '../API/SYSKApi';


class PlaceList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { places: [], isLoading: true, }
    this._loadPlaces();
  }

  _loadPlaces = () => {
      getPlacesOfCityAndCat(this.props.navigation.state.params.nameCity, this.props.navigation.state.params.categoryName).then(data => {
        this.setState({
          places: data,
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

  _displayPlace = (idPlace) => {
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    this.props.navigation.navigate('PlaceInfo', {idPlace: idPlace});
  }

  render() {
    return (
      <View style={styles.main_container}>
        <FlatList
          style={styles.list}
          data={this.state.places}
          keyExtractor={(item, index) => item.idPlace.toString() }
          renderItem={({item}) => (
            <PlaceItem
              place={item}
              onClicItem={this._displayPlace}
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

export default connect(mapStateToProps)(PlaceList)
