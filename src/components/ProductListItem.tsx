import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ProductListItem = ({product}: any) => {
  return (
    <View style={styles.container}>
    <Image source={{ uri: product.image}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>{product.price}</Text>
  </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        padding: 10,
        borderRadius: 20
      },
      image: {
        width: '100%',
        aspectRatio: 1
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 18,
        color: Colors.light.tint
      }
})