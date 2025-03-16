import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const discounts = [
  { id: "1", title: "Скидка 10% на все товары" },
  { id: "2", title: "Купи 2, получи 1 бесплатно" },
  { id: "3", title: "Скидка 20% на продукты выше 1000 руб" },
];

export default function DiscountsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Скидки</Text>
      <FlatList
        data={discounts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.discountItem}>
            <Text style={styles.discountText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  discountItem: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  discountText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
