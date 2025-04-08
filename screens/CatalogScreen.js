import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

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
];

const CatalogScreen = () => {
  const [expanded, setExpanded] = useState(true);
  const navigation = useNavigation();

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={28} color="black" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person-circle" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity style={styles.toggleButton} onPress={() => setExpanded(!expanded)}>
        <Text style={styles.toggleText}>{expanded ? "Close" : "Expand"} {expanded ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {/* Category List */}
      {expanded && (
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: "#F3F3F3",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationIcon: {
    position: "relative",
    marginRight: 10,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  notificationBadgeText: {
    color: "white",
    fontSize: 12,
  },
  toggleButton: {
    alignSelf: "flex-end",
    paddingRight: 20,
    marginTop: 10,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default CatalogScreen;
