import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function ConfiguracionScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Configuración</Text>
      <View style={[sharedStyles.panel, styles.row]}>
        <View style={styles.copy}>
          <Text style={styles.label}>Notificaciones</Text>
          <Text style={sharedStyles.text}>Ejemplo de estado interactivo en una pantalla de tabs.</Text>
        </View>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  copy: {
    flex: 1,
    paddingRight: 12
  },
  label: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4
  },
  row: {
    alignItems: "center",
    flexDirection: "row"
  }
});
