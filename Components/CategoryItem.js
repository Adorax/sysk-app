// Components/CategoryItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
//import { getImageFromApi } from '../API/TMDBApi'
//linkCity, nameCity, linkCat, categoryName
class CategoryItem extends React.Component {

    render() {
      const { category, onClicItem } = this.props
      return (
        <TouchableOpacity
          onPress={() => onClicItem(category)}
          style={styles.main_container}>
          <ImageBackground
            style={styles.image}
            source={require('../Img/category.jpg')}
          >
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{category}</Text>
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
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
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

export default CategoryItem
