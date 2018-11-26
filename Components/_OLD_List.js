// Components/FilmList.js

import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
//import FilmItem from './FilmItem';
import { connect } from 'react-redux';
//import { getAllCities } from '../API/TMDBApi';


class CityList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { cities: [], isLoading: false, }
  }

  _loadCities = () => {
      this.setState({ isLoading : true });
      getAllCities().then(data => {
        this.setState({
          cities: [ ...data.results ],
          isLoading : false //Stop loading page
        })
      })
    }
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: []
    }, () => {this._loadFilms()})
  }

  _displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
          </View>
        )
      }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this.searchedText = text }
          onSubmitEditing={() => this._searchFilms()}
        />
        <Button style={styles.textinput} title='Rechercher' onPress={() => this._searchFilms()}/>
          <FilmList
            films={this.state.films}
            navigation={this.props.navigation}
            loadFilms={this._loadFilms}
            page={this.page}
            totalPages={this.totalPages}
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
    }
  })


  _displayDetailForFilm = (idFilm) => {
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  }

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.props.places}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <FilmItem
              film={item}
              isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
              displayDetailForFilm={this._displayDetailForFilm}
            />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if ( this.props.favList && this.props.films.length > 0 && this.props.page < this.props.totalPages) {
              // On appelle la méthode loadfilm du component Search pour charger plus de film
              this.props.loadFilms()
            }
          }}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(CityList)
