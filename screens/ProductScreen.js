import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProductScreen({ route }) {
  const navigation = useNavigation();
  const { product } = route.params; // Получаем данные о товаре

  // Преобразование полей в нужный формат
  const productName = product["Товар"];
  const productPrice = product["Цена"];

  return (
    <View style={styles.container}>
      {/* Название товара */}
      <Text style={styles.title}>{productName}</Text>
      
      {/* Цена товара */}
      <Text style={styles.price}>{productPrice} c</Text>

      {/* Кнопки */}
      <View style={styles.buttonContainer}>
        {/* Кнопка Назад */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Назад</Text>
        </TouchableOpacity>

        {/* Кнопка Добавить в корзину */}
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => navigation.navigate("Main", { screen: "Cart", params: { product } })}
        >
          <Text style={styles.addButtonText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: "gray",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  backButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
