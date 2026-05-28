import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function DetalleScreen({ navigation }) {
  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Detalle</Text>
      <Text style={sharedStyles.text}>Vista abierta mediante Stack Navigation.</Text>
      <View style={sharedStyles.panel}>
        <Text style={styles.detail}>Desde aquí se evidencia el retorno entre vistas.</Text>
        <Pressable style={[sharedStyles.button, styles.button]} onPress={() => navigation.goBack()}>
          <Text style={sharedStyles.buttonText}>Volver</Text>
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
  detail: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "700"
  }
});
