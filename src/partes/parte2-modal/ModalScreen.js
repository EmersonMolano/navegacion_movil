import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function ModalScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Dialog o Modal</Text>
      <Text style={sharedStyles.text}>El modal se abre y se cierra mediante botones.</Text>

      <View style={sharedStyles.panel}>
        <Text style={styles.status}>{visible ? "Modal abierto" : "Modal cerrado"}</Text>
        <Pressable style={[sharedStyles.button, styles.openButton]} onPress={() => setVisible(true)}>
          <Text style={sharedStyles.buttonText}>Abrir modal</Text>
        </Pressable>
      </View>

      <Modal animationType="slide" transparent visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.backdrop}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Mensaje informativo</Text>
            <Text style={sharedStyles.text}>
              Este componente usa Modal de React Native, compatible con Android e iOS.
            </Text>
            <Pressable style={[sharedStyles.button, styles.closeButton]} onPress={() => setVisible(false)}>
              <Text style={sharedStyles.buttonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.45)",
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  closeButton: {
    backgroundColor: "#be123c",
    marginTop: 18
  },
  modalBox: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    maxWidth: 420,
    padding: 22,
    width: "100%"
  },
  modalTitle: {
    color: "#0f172a",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 8
  },
  openButton: {
    backgroundColor: "#b45309",
    marginTop: 16
  },
  status: {
    color: "#0f172a",
    fontSize: 18,
    fontWeight: "700"
  }
});
