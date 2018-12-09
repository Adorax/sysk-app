// Components/PlaceDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button, TouchableOpacity, Hr } from 'react-native'
import { getAPlace, get, getCatOfPlace } from '../API/SYSKApi'
import numeral from 'numeral'
import moment from 'moment'
import Tags from "react-native-tags"
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux'

class PlaceDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      place: undefined,
      category: [],
      city: '',
      rate: undefined,
      pic: undefined,
      isLoading: true,
    }
  }

  componentDidMount() {
    get(this.props.navigation.state.params.linkPlace).then(data => {
      console.log(data);
      let id = data._links.self.href.split("/")
      id = id[id.length-1];
      getCatOfPlace(id).then(cat =>
        get(data._links.city.href).then(city => {
          this.setState({
            place: data,
            category: cat._embedded.categories,
            city: city.nameCity,
            isLoading: false
          })
        })
      )
      //this.setState({place: data, isLoading: false})
    });
  }

  componentDidUpdate() {
    //console.log(this.props.favoritesFilm)
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

  _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.state.place }
        this.props.dispatch(action)
  }

  _displayFavoriteImage() {
      let sourceImage = require('../Img/fav_false.png')
      /*if (this.props.favoritesPlace.findIndex(item => item._links.self.href === this.state.place._links.self.href) !== -1) {
        sourceImage = require('../Img/fav_true.png')
      }*/
      return (
        <Image
          style={styles.favorite_image}
          source={sourceImage}
        />
      )
  }

  _displayPlace() {
    const { place } = this.state
    if (place != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={require('../Img/place.jpg')}
          />
          <View style={styles.button_container}>
            <Icon
              size={38}
              name='thumb-up'
              onPress={() => console.log('up')}
            />
            <Text style={styles.title_text}>{place.namePlace}</Text>
              <Icon
                size={38}
                name='tag_faces'
                onPress={() => console.log('up')}
              />
          </View>
          <View style={styles.button_container}>
            <Icon
              size={38}
              name='thumbs-up'
              type='font-awesome'
              color='black'
              onPress={() => console.log('up')}
            />
            <TouchableOpacity
              style={styles.favorite_container}
              onPress={() => this._toggleFavorite()}>
              {this._displayFavoriteImage()}
            </TouchableOpacity>
            <Icon
              size={38}
              name='thumbs-down'
              type='font-awesome'
              onPress={() => console.log('down')}
            />
          </View>
          <Text style={styles.description_text}>{place.description}</Text>
          <Text style={styles.default_text}>Address : {place.address}</Text>
          <Text style={styles.default_text}>City : {this.state.city} </Text>
          <Text style={styles.default_text}>Note :  / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : </Text>
          <Text style={styles.default_text}>Budget : {numeral().format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Category :</Text>
          <Tags
            initialTags={this.state.category.map(function(category){
                          return category.categoryName;
                        })}
            containerStyle={{ justifyContent: "center" }}
            deleteTagOnPress={false}
            readonly={true}
          />
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayPlace()}
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
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_container: {
    alignItems: 'center',
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  favorite_image: {
    width: 40,
    height: 40
  },
})

const mapStateToProps = (state) => {
  return { favoritesFilm: state.favoritesFilm }
}

export default connect(mapStateToProps)(PlaceDetail)
 //====>  this makes the same as the next line
 //connect state of the app in the prop of the component
//export default connect(state => state.favoritesFilm)(FilmDetail)

//export default FilmDetail
