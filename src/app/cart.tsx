import { Platform, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import React from 'react'

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>


      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})