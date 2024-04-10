import React from 'react'
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useCart } from './providers/CartProvider';
import CartListItem from '@/components/CartListItem';
import Button from '@/components/Button';


const CartScreen = () => {
  const { items, total  } = useCart()
  return (
    <View style={styles.container}>
     <FlatList 
       data={items}
       renderItem={({item})=> (
        <CartListItem cartItem={item} />
       )
      }
       contentContainerStyle={styles.listContentContainer}
     />
    
    <Text style={styles.priceText}> Total: ${total}</Text>
    <Button text='Checkout'/> 


      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  listContentContainer: {
    gap: 10
  },
  priceText: {
    fontSize: 18,
    marginVertical: 10
  }
})