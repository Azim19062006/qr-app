import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";


const categories = [
    { id: "1", name: "Meat, Poultry, Fish", image: require("../assets/meat.png") },
    { id: "2", name: "Vegetables, Fruits, Nuts, Greens", image: require("../assets/vegetables.png") },
    { id: "3", name: "Bakery Products", image: require("../assets/bakery.png") },
    { id: "4", name: "Beverages", image: require("../assets/beverages.png") },
    { id: "5", name: "Grocery", image: require("../assets/grocery.png") },
    { id: "6", name: "Tea, Coffee, Cocoa, Jelly", image: require("../assets/tea.png") },
    { id: "7", name: "Healthy Food", image: require("../assets/healthy.png") },
    { id: "8", name: "Confectionery", image: require("../assets/confectionery.png") },
    { id: "9", name: "Cooking", image: require("../assets/cooking.png") },
    { id: "10", name: "Sausages, Deli Meats", image: require("../assets/sausages.png") },
    // Добавляйте категории по мере необходимости
  ];
  


const CatalogScreen = () => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two items per row
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "#333",
  },
});

export default CatalogScreen;
