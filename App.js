import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import BotonesScreen from "./src/partes/parte1-botones/BotonesScreen";
import ModalScreen from "./src/partes/parte2-modal/ModalScreen";
import DropdownScreen from "./src/partes/parte3-dropdown/DropdownScreen";
import CalculadoraScreen from "./src/partes/parte4-calculadora/CalculadoraScreen";
import ScrollLoadingScreen from "./src/partes/parte5-scroll-loading/ScrollLoadingScreen";
import NavigationDemoScreen from "./src/partes/parte6-navegacion/NavigationDemoScreen";
import PerfilScreen from "./src/partes/parte6-navegacion/PerfilScreen";
import ConfiguracionScreen from "./src/partes/parte6-navegacion/ConfiguracionScreen";
import DetalleScreen from "./src/partes/parte6-navegacion/DetalleScreen";

const RootStack = createNativeStackNavigator();
const DemoStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const parts = [
  {
    title: "Parte 1",
    subtitle: "Uso de botones",
    route: "Botones",
    color: "#2563eb"
  },
  {
    title: "Parte 2",
    subtitle: "Dialog o Modal",
    route: "Modal",
    color: "#b45309"
  },
  {
    title: "Parte 3",
    subtitle: "Dropdown Android/iOS",
    route: "Dropdown",
    color: "#0f766e"
  },
  {
    title: "Parte 4",
    subtitle: "Calculadora básica",
    route: "Calculadora",
    color: "#7c3aed"
  },
  {
    title: "Parte 5",
    subtitle: "Scroll Loading",
    route: "ScrollLoading",
    color: "#be123c"
  },
  {
    title: "Parte 6",
    subtitle: "React Navigation",
    route: "Navegacion",
    color: "#15803d"
  }
];

function InicioScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.homeContent}>
      <Text style={styles.eyebrow}>React Native con Expo</Text>
      <Text style={styles.title}>Actividad de componentes y navegación móvil</Text>
      <Text style={styles.description}>
        Selecciona una parte para revisar su funcionalidad. Cada sección está separada en su propia carpeta dentro de src/partes.
      </Text>

      <View style={styles.grid}>
        {parts.map((part) => (
          <Pressable
            key={part.route}
            accessibilityRole="button"
            onPress={() => navigation.navigate(part.route)}
            style={({ pressed }) => [
              styles.partButton,
              { borderLeftColor: part.color },
              pressed && styles.pressed
            ]}
          >
            <Text style={styles.partTitle}>{part.title}</Text>
            <Text style={styles.partSubtitle}>{part.subtitle}</Text>
            <Text style={[styles.partAction, { color: part.color }]}>Abrir</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

function DemoStackNavigator() {
  return (
    <DemoStack.Navigator>
      <DemoStack.Screen name="HomeDemo" component={NavigationDemoScreen} options={{ title: "Home" }} />
      <DemoStack.Screen name="Detalle" component={DetalleScreen} options={{ title: "Detalle" }} />
    </DemoStack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#15803d",
        tabBarInactiveTintColor: "#64748b"
      }}
    >
      <Tab.Screen name="Home" component={DemoStackNavigator} options={{ tabBarLabel: "Home" }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configuracion" component={ConfiguracionScreen} options={{ tabBarLabel: "Config." }} />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#15803d",
        headerStyle: { backgroundColor: "#f8fafc" },
        headerTitleStyle: { fontWeight: "700" }
      }}
    >
      <Drawer.Screen name="Tabs" component={TabsNavigator} options={{ title: "Parte 6 - Navegación" }} />
      <Drawer.Screen name="PerfilDrawer" component={PerfilScreen} options={{ title: "Perfil" }} />
      <Drawer.Screen name="ConfiguracionDrawer" component={ConfiguracionScreen} options={{ title: "Configuración" }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Inicio" component={InicioScreen} options={{ title: "Actividad móvil" }} />
        <RootStack.Screen name="Botones" component={BotonesScreen} options={{ title: "Parte 1 - Botones" }} />
        <RootStack.Screen name="Modal" component={ModalScreen} options={{ title: "Parte 2 - Modal" }} />
        <RootStack.Screen name="Dropdown" component={DropdownScreen} options={{ title: "Parte 3 - Dropdown" }} />
        <RootStack.Screen name="Calculadora" component={CalculadoraScreen} options={{ title: "Parte 4 - Calculadora" }} />
        <RootStack.Screen name="ScrollLoading" component={ScrollLoadingScreen} options={{ title: "Parte 5 - Scroll Loading" }} />
        <RootStack.Screen name="Navegacion" component={DrawerNavigator} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8fafc"
  },
  homeContent: {
    padding: 20,
    paddingBottom: 36
  },
  eyebrow: {
    color: "#475569",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase"
  },
  title: {
    color: "#0f172a",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8
  },
  description: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10
  },
  grid: {
    gap: 12,
    marginTop: 24
  },
  partButton: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderLeftWidth: 5,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.99 }]
  },
  partTitle: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "800"
  },
  partSubtitle: {
    color: "#475569",
    fontSize: 15,
    marginTop: 4
  },
  partAction: {
    fontSize: 14,
    fontWeight: "800",
    marginTop: 12
  }
});
