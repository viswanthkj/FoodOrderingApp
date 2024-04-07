import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Product } from '../types'

export const defaulPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
  product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {
  return (
    <View style={styles.container}>
    <Image source={{ uri: product.image ||  defaulPizzaImage}} style={styles.image}/>
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
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
        fontSize: 16,
        color: Colors.light.tint
      }
})