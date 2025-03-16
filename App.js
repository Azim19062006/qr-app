import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ScannerScreen from "./screens/ScannerScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import DiscountsScreen from "./screens/DiscountsScreen";
import CatalogScreen from "./screens/CatalogScreen"; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Catalog") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Scanner") {
            iconName = "qr-code-outline"; // Для централизованной кнопки
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Discounts") {
            iconName = focused ? "pricetags" : "pricetags-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: "#333", // Цвет нижней панели
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#bbb",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: "", // Убираем текст для центральной кнопки
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="qr-code"
              size={30}
              color={focused ? "#fff" : "#bbb"}
              style={{
                backgroundColor: "#444",
                borderRadius: 50,
                padding: 10,
                elevation: 5,
                transform: [{ translateY: -15 }], // Поднимаем кнопку
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Discounts" component={DiscountsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Product" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
