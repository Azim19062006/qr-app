import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Пример популярных товаров
  const popularProducts = [
    { id: "1", name: "Продукт 1", image: null },
    { id: "2", name: "Продукт 2", image: null },
    { id: "3", name: "Продукт 3", image: null },
    { id: "4", name: "Продукт 4", image: null },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productImage}>
        {/* Здесь можно добавить Image для отображения изображения */}
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Верхняя панель */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Главная</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Секция с бонусами и QR-кодом */}
      <View style={styles.bonusSection}>
        <View style={styles.bonusCard}>
          <Text style={styles.bonusText}>Bonuses</Text>
          <Text style={styles.bonusAmount}>234234.00</Text>
        </View>
        <View style={styles.qrCodeCard}>
          {/* Заглушка для QR-кода */}
          <View style={styles.qrCodePlaceholder}>
            <Ionicons name="qr-code" size={50} color="black" />
          </View>
        </View>
      </View>

      {/* Популярные товары */}
      <View style={styles.popularSection}>
        <Text style={styles.sectionTitle}>Популярные товары</Text>
        <FlatList
          data={popularProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>

      {/* Нижняя навигация */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Scanner")}>
          <Ionicons name="qr-code" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF5A5F",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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
    right: -5,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  notificationBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  bonusSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  bonusCard: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bonusText: {
    fontSize: 16,
    color: "#000",
  },
  bonusAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  qrCodeCard: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  qrCodePlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  popularSection: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: "48%",
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  productName: {
    fontSize: 14,
    textAlign: "center",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
});
