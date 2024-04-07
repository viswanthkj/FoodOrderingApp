import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailItem = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title:`Details: ${id}`}} />
      <Text>ProductDetailItem : {id}</Text>
    </View>
  )
}

export default ProductDetailItem

const styles = StyleSheet.create({})