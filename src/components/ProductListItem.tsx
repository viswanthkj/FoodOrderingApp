import { StyleSheet,Image, Text, View,Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Product } from '../types'
import { Link, useSegments } from 'expo-router'

export const defaulPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
  product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {
  const segments = useSegments()
  console.log(segments)
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
    <Image source={{ uri: product.image ||  defaulPizzaImage}} style={styles.image} resizeMode='contain' />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </Pressable>
  </Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '50%',
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