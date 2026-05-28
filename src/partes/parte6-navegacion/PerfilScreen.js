import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function PerfilScreen() {
  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Perfil</Text>
      <View style={sharedStyles.panel}>
        <Text style={styles.name}>Aprendiz React Native</Text>
        <Text style={sharedStyles.text}>Pantalla disponible desde Bottom Tabs y Drawer Layout.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#0f172a",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8
  }
});
