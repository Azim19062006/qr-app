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
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const popularProducts = [
    {
      id: "1",
      name: "Coca-Cola, 250 ml",
      price: "30.00 som",
      image: require("../assets/coca-cola.png"),
    },
    {
      id: "2",
      name: "Simplicity notebook",
      price: "54.50 som",
      image: require("../assets/notebook.png"),
    },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Верхняя панель */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.notificationIcon}>
              <Ionicons name="notifications" size={24} color="white" />
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Ionicons name="person-circle" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Текст приветствия */}
        <Text style={styles.welcomeText}>
          Hello, <Text style={styles.boldText}>Ayana</Text>!
        </Text>
        <Text style={styles.appName}>
          Welcome to <Text style={styles.boldText}>asiacart!</Text>
        </Text>
      </View>

      {/* Бонусы и QR-код */}
      <View style={styles.container}>
        <View style={styles.bonusSection}>
          <TouchableOpacity style={styles.bonusCard}>
            <Text style={styles.bonusText}>Bonuses</Text>
            <Text style={styles.bonusAmount}>52.06</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.qrCodeCard} 
            onPress={() => navigation.navigate('QRCodeScreen')}
          >
            <Ionicons name="qr-code" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Популярные товары */}
      <View style={styles.popularSection}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <FlatList
          data={popularProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#333",
    padding: 15,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  welcomeText: {
    color: "white",
    fontSize: 18,
    marginTop: 50,
  },
  appName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  boldText: {
    fontWeight: "bold",
  },
  bonusSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  bonusCard: {
    flex: 1,
    backgroundColor: "#e6005c",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  bonusText: {
    fontSize: 16,
    color: "white",
  },
  bonusAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  qrCodeCard: {
    width: 60,
    height: 60,
    backgroundColor: "#e6005c",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 5,
  },
  
  bonusSection: {
    flexDirection: "row",
    backgroundColor: "#e6005c",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  bonusCard: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  bonusText: {
    fontSize: 16,
    color: "white",
    marginLeft: 20,
  },
  bonusAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  qrCodeCard: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  popularSection: {
    flex: 1,
    padding: 15,
    marginTop: 10,
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
    height: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e6005c",
    marginTop: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "90%",
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  addButtonText: {
    color: "white",
    fontSize: 14,
  },
});
