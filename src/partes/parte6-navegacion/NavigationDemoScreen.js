import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function NavigationDemoScreen({ navigation }) {
  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>React Navigation</Text>
      <Text style={sharedStyles.text}>
        Esta parte integra NavigationContainer, Stack Navigator, Bottom Tabs y Drawer Layout.
      </Text>

      <View style={sharedStyles.panel}>
        <Text style={styles.heading}>Home</Text>
        <Text style={sharedStyles.text}>Usa el menú lateral, el menú inferior o abre una vista de detalle con Stack.</Text>
        <Pressable style={[sharedStyles.button, styles.button]} onPress={() => navigation.navigate("Detalle")}>
          <Text style={sharedStyles.buttonText}>Ir a Detalle</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#15803d",
    marginTop: 16
  },
  heading: {
    color: "#0f172a",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8
  }
});
