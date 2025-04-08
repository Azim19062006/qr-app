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
import ProfileScreen from './screens/ProfileScreen';
import QRCodeScreen from "./screens/QRCodeScreen";
import PaymentCompleteScreen from "./screens/PaymentCompleteScreen";

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
            iconName = "qr-code-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Discounts") {
            iconName = focused ? "pricetags" : "pricetags-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: "#3B3B3B",
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
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="qr-code"
              size={20}
              color={focused ? "#fff" : "#bbb"}
              style={{
                backgroundColor: "#FF5A5F",
                borderRadius: 10,
                padding: 5,
                elevation: 5,
                transform: [{ translateY: -15 }],
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
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentComplete" component={PaymentCompleteScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
