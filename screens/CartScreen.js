import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen({ route }) {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  // Загружаем товары из AsyncStorage при открытии корзины
  useEffect(() => {
    loadCart();
  }, []);

  // Если пришёл новый товар, добавляем его в корзину
  useEffect(() => {
    if (route.params?.product) {
      addToCart(route.params.product);
    }
  }, [route.params]);

  // Функция загрузки корзины из AsyncStorage
  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Ошибка загрузки корзины:", error);
    }
  };

  // Функция добавления товара в корзину
  const addToCart = async (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Функция очистки корзины (после оплаты)
  const clearCart = async () => {
    await AsyncStorage.removeItem("cart");
    setCartItems([]);
  };

  // Функция подсчёта итоговой суммы
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Корзина</Text>

      {/* Список товаров */}
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price} c</Text>
          </View>
        )}
      />

      {/* Итоговая сумма */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Итого:</Text>
        <Text style={styles.totalPrice}>{getTotalPrice()} c</Text>
      </View>

      {/* Кнопки */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Scanner")}>
          <Text style={styles.backButtonText}>Назад</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.payButton} 
        onPress={() => navigation.navigate('PaymentComplete')}>
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
