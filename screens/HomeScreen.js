import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Scanner App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Scanner")}>
        <Text style={styles.buttonText}>Сканировать QR-код</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.buttonText}>Открыть корзину</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "red", padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18 }
});
