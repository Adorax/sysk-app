// Components/PlaceDetail.js

import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image, Button, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import { getAPlace, get, getCatOfPlace, getAUserbyUsername, addRate} from '../API/SYSKApi'
import numeral from 'numeral'
import moment from 'moment'
import Tags from "react-native-tags"
import { Icon } from 'react-native-elements'

import { connect } from 'react-redux'

class PlaceDetail extends React.Component {

  navigationOptions: {
    title: 'Details'
  }
  constructor(props) {
    super(props)
    this.state = {
      place: undefined,
      category: [],
      city: '',
      rates: [],
      pic: undefined,
      isLoading: true,
      percent: 0,
    }
  }

  componentDidMount() {
    get(this.props.navigation.state.params.linkPlace).then(data => {
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
      get(data._links.rates.href).then(rates => {
        this.setState({rates: rates._embedded.rates});
      });
    });
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

  addRate = async (isUp) => {
    let idPlace = this.state.place._links.self.href.split("/")
    idPlace = idPlace[idPlace.length-1];
    const username = await AsyncStorage.getItem("login");
    getAUserbyUsername(username).then(user => {
        console.log(user._links.self.href);
        let idUser = user._links.self.href.split("/")
        idUser = idUser[idUser.length-1];
        addRate({"rate" : isUp, "idUser" : idUser, "idPlace" : idPlace}).then(rate => {
          console.log(rate);
          get(this.state.place._links.rates.href).then(rates => {
            this.setState({rates: rates._embedded.rates});
          });
        });

    });
  }

  _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.state.place }
        this.props.dispatch(action)
  }

  _linkAddress() {
    const address = this.state.place.address + ", " + this.state.city;
    Linking.openURL('https://www.google.com/maps/search/?api=1&query=' + address);
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

  _displayPercent = () => {
    const rateUp = this.state.rates.filter(rate => rate.like === true);
    return Math.round( rateUp.length / this.state.rates.length * 1000 ) / 10;
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
            <Text style={styles.title_text}>{place.namePlace}</Text>
            <Text style={styles.percent_text}>{this._displayPercent()}% of {this.state.rates.length} rates like this</Text>
              {/* distance from you ...     <Icon
                size={38}
                name='tag_faces'
                onPress={() => console.log('up')}
              />*/}
          </View>
          <View style={styles.button_container}>
            <Icon
              size={38}
              name='thumbs-up'
              type='font-awesome'
              color='black'
              onPress={() => this.addRate(true)}
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
              onPress={() => this.addRate(false)}
            />
          </View>
          <Text style={styles.description_text}> {place.description} </Text>
          <View style={styles.info_container}>
            <TouchableOpacity
                onPress={() => this._linkAddress()}>
                <Text style={styles.default_text}>Address : {place.address}</Text>
            </TouchableOpacity>
            <Text style={styles.default_text}>City : {this.state.city} </Text>
            <Text style={styles.default_text}>Nombre de votes : {this.state.rates.length}</Text>
            <Text style={styles.default_text}>Category :</Text>
            <Tags
              initialTags={this.state.category.map(function(category){
                            return category.categoryName;
                          })}
              containerStyle={{ justifyContent: "center" }}
              deleteTagOnPress={false}
              readonly={true}
            />
          </View>
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
  percent_text: {
    flex: 1,
    flexWrap: 'wrap',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 4,
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
    textAlign: 'justify',
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
  info_container: {
    flex: 1,
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
