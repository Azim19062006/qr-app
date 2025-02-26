import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ScannerScreen from "./screens/ScannerScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Главная" }} />
        <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: "Сканер" }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ title: "Товар" }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Корзина" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
