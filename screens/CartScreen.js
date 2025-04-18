import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen({ route }) {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from AsyncStorage on component mount
  useEffect(() => {
    loadCart();
  }, []);

  // If a new product is passed, add it to the cart
  useEffect(() => {
    if (route.params?.product) {
      addToCart(route.params.product);
    }
  }, [route.params]);

  // Function to load cart from AsyncStorage
  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  // Function to add a product to the cart
  const addToCart = async (product) => {
    try {
      // Load existing cart items from AsyncStorage
      const existingCart = await AsyncStorage.getItem("cart");
      const currentCart = existingCart ? JSON.parse(existingCart) : [];

      // Check if the product already exists in the cart
      const existingProduct = currentCart.find(item => item["Код товара"] === product["Код товара"]);
      if (existingProduct) {
        Alert.alert("Товар уже в корзине", "Этот товар уже добавлен в вашу корзину.");
        return;
      }

      // Add the new product to the cart
      const updatedCart = [...currentCart, product];

      // Save the updated cart to AsyncStorage
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));

      // Update state
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  // Function to calculate the total price of all cart items
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item["Цена"], 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Корзина</Text>

      {/* List of cart items */}
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item["Товар"]}</Text>
            <Text style={styles.itemPrice}>{item["Цена"]} c</Text>
          </View>
        )}
      />

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Итого:</Text>
        <Text style={styles.totalPrice}>{getTotalPrice()} c</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Scanner")}>
          <Text style={styles.backButtonText}>Назад</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.payButton} 
          onPress={async () => {
            try {
              // Clear cart data from AsyncStorage
              await AsyncStorage.removeItem("cart");

              // Clear the cart in the state
              setCartItems([]);

              // Optionally navigate to another screen after clearing the cart (e.g., a confirmation screen)
              navigation.navigate("PaymentComplete");
            } catch (error) {
              console.error("Error clearing the cart:", error);
            }
          }}
        >
          <Text style={styles.payButtonText}>Оплатить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
  payButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
