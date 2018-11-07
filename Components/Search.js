// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "";
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0
    //isLoading to now if we show the loading page
    this.state = { films: [], isLoading: false, } // Don't put searchText here because we want to rerend the view only when we clic search  --> searchedText: "" }
  }

  //underscore first to indicate it is a private function. (This just indicate you can do search._loadFilms but you know it is not good !)
  _loadFilms() {
    if (this.state.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      this.setState({ isLoading : true });
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({
            films: data.results,
            isLoading : false //Stop loading page
          })
      })
    }
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
          onSubmitEditing={() => this._loadFilms()}
        />
        <Button style={styles.textinput} title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  //flex, flexDirection, justifyContent, alignItems
  main_container: {
    flex: 1,
    marginTop: 20
  },textinput: {
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
    //so we show TextInput
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Search;
