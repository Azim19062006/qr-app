import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const QRCodeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your code <Text style={styles.brand}> "Asiacart" </Text></Text>
          <Ionicons name="help-circle-outline" size={24} color="black" />
        </View>

        {/* Code Display */}
        <Text style={styles.codeText}>857 7777 57578</Text>
        <Text style={styles.bonusesTitle}>Bonuses</Text>
        <Text style={styles.bonusesValue}>0.00</Text>

        {/* QR Code */}
        <Image source={require("../assets/qrcode_insta.png")} style={styles.qrCode} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  brand: {
    fontWeight: "bold",
    fontSize: 16,
  },
  codeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bonusesTitle: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bonusesValue: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
});

export default QRCodeScreen;
