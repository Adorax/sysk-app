// Components/CategoryItem.js

import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
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
})

export default CategoryItem
