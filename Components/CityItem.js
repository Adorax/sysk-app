// Components/CityItem.js

import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
//import { getImageFromApi } from '../API/TMDBApi'

class CityItem extends React.Component {

  render() {
    const { city, onClicItem } = this.props
    return (
      <TouchableOpacity
        onPress={() => onClicItem(city._links.self.href, city.nameCity)}
        style={styles.main_container}>
        <ImageBackground
          style={styles.image}
          source={require('../Img/city.jpg')}
        >
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{city.nameCity}</Text>
            </View>
          </View>
        </ImageBackground>


      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex:1,
    margin:1,
  },
  content_container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_container: {
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 32,
    flexWrap: 'wrap',
    backgroundColor: 'white'
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

export default CityItem
