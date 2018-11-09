// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator, FlatList } from 'react-native'
import FilmItem from './FilmItem'
import FilmList from './FilmList'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js



class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "";
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0
    //isLoading to now if we show the loading page
    this.state = { films: [], isLoading: false, }  // Don't put searchText here because we want to rerend the view only when we clic search  --> searchedText: "" }
    //databind to use this in filmlist ==> You can use as well arrow function to bind (funcName = () => (..))
    this._loadFilms = this._loadFilms.bind(this)
  }

  //underscore first to indicate it is a private function. (This just indicate you can do search._loadFilms but you know it is not good !)
  _loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      this.setState({ isLoading : true });
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          films: [ ...this.state.films, ...data.results ],
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

  export default Search
