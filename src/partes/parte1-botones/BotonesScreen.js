import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function BotonesScreen() {
  const [message, setMessage] = useState("Presiona un botón para ver un mensaje.");
  const [count, setCount] = useState(0);

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Uso de botones</Text>
      <Text style={sharedStyles.text}>Tres botones con eventos onPress y estilos personalizados.</Text>

      <View style={sharedStyles.panel}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.counter}>Interacciones: {count}</Text>
      </View>

      <View style={styles.actions}>
        <ActionButton color="#2563eb" label="Saludar" onPress={() => {
          setMessage("Hola, el botón Saludar funciona correctamente.");
          setCount((value) => value + 1);
        }} />
        <ActionButton color="#0f766e" label="Cambiar texto" onPress={() => {
          setMessage("El texto cambió usando el evento onPress.");
          setCount((value) => value + 1);
        }} />
        <ActionButton color="#b45309" label="Reiniciar" onPress={() => {
          setMessage("Presiona un botón para ver un mensaje.");
          setCount(0);
        }} />
      </View>
    </View>
  );
}

function ActionButton({ color, label, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [sharedStyles.button, { backgroundColor: color }, pressed && styles.pressed]}
    >
      <Text style={sharedStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actions: {
    gap: 12,
    marginTop: 18
  },
  counter: {
    color: "#64748b",
    fontSize: 14,
    marginTop: 8
  },
  message: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "700"
  },
  pressed: {
    opacity: 0.8
  }
});
