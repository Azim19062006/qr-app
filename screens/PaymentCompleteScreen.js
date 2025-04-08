import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PaymentCompleteScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Success Icon */}
        <Ionicons name="shield-checkmark" size={150} color="#4CAF50" style={styles.successIcon} />

        {/* Congratulations Text */}
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.subtitle}>Your payment has been successfully completed!</Text>
        <Text style={styles.subtitle}>Enjoy your purchase!</Text>

        {/* Digital Receipt Button */}
        <TouchableOpacity style={styles.receiptButton}>
          <Ionicons name="qr-code-outline" size={20} color="#fff" />
          <Text style={styles.receiptButtonText}> Your digital receipt </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2D2D3A",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  successIcon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#D3D3D3",
    textAlign: "center",
    marginBottom: 10,
  },
  receiptButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 30,
    marginTop: 30,
  },
  receiptButtonText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
});

export default PaymentCompleteScreen;
