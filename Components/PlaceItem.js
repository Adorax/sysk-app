// Components/CategoryItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class PlaceItem extends React.Component {

    render() {
      const { place, onClicItem } = this.props
      return (
        <TouchableOpacity
          onPress={() => onClicItem(place._links.self.href)}
          style={styles.main_container}>
          <Image
            style={styles.image}
            source={require('../Img/category.jpg')}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              {/*this._displayFavImg()*/}
              <Text style={styles.title_text}>{place.namePlace}</Text>
              <Text style={styles.vote_text}></Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>{place.description}</Text>
            </View>
            <View style={styles.date_container}>
              <Text style={styles.date_text}></Text>
            </View>
          </View>

        </TouchableOpacity>
      )
    }
  }

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 128,
    height: 188,
    margin: 1,
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  },
})

export default PlaceItem
