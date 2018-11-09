// Components/Favorites.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import FilmList from './FilmList'

class Favorites extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
        <FilmList
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favList= {true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})


const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)
