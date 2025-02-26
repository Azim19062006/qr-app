import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, AppState, Platform, StatusBar, Image } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Иконка камеры
import products from "../assets/products.json"; // JSON с товарами

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const navigation = useNavigation();

  // Запрос разрешения на использование камеры
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Сброс блокировки при переключении приложения
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        qrLock.current = false;
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, []);

  // Обработчик сканирования штрих-кода
  const handleBarCodeScanned = ({ data }) => {
    if (data && !qrLock.current) {
      qrLock.current = true;
      setScanned(true);

      // Ищем товар в JSON
      const product = products.find((item) => item.code === data.trim());

      if (product) {
        navigation.navigate("Product", { product });
      } else {
        alert(`Товар с кодом ${data} не найден!`);
        setScanned(false);
      }
    }
  };

  // Проверка разрешения на камеру
  if (hasPermission === null) return <Text>Запрос разрешения на камеру...</Text>;
  if (hasPermission === false) return <Text>Нет доступа к камере</Text>;

  return (
    <View style={styles.container}>
      {Platform.OS === "android" ? <StatusBar hidden /> : null}

      {/* Верхняя панель */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Scan</Text>
      </View>

      {/* Камера для сканирования */}
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing="back"
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
        <Ionicons name="camera-outline" size={40} color="black" style={styles.cameraIcon} />
      </View>

      {/* Кнопка "Next" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Cart")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  cameraContainer: {
    width: "80%",
    height: 200,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  cameraIcon: {
    position: "absolute",
    zIndex: 1,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
