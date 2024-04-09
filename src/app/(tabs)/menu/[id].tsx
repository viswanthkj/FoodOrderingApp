import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@assets/data/products";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";
import { useCart } from "@/app/providers/CartProvider";
import { PizzaSize } from "@/types";

export const defaulPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const sizes: PizzaSize[] =  ['S', 'M', 'L', 'XL'];
const ProductDetailItem = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("S");
  const { id } = useLocalSearchParams();
  const {addItem} = useCart()
  const router = useRouter()

  const product = products.find(
    (product) => product.id.toString() === id.toString()
  );

  const addToCart = () => {
    if(!product) {
      return;
    }
    console.warn('item added')
    addItem(product, selectedSize)
    router.push('/cart')
  }

  if (!product) {
    return <Text>Product is unavailable</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaulPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>Select size</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            style={[
              styles.size,
              {
                backgroundColor:
                  selectedSize === size ? "lightblue" : "white",
              },
            ]}
            key={size}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.sizeText}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text='Add to Cart'/> 
    </View>
  );
};

export default ProductDetailItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 10
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    height: 40,
    width: 40,
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    fontSize: 16,
    color: Colors.light.tint,
    marginTop: 'auto'
  },
});
