import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

const options = ["Android", "iOS", "Expo Go", "React Native CLI"];

export default function DropdownScreen() {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Dropdown Android/iOS</Text>
      <Text style={sharedStyles.text}>Selector creado con componentes base para funcionar igual en ambas plataformas.</Text>

      <View style={sharedStyles.panel}>
        <Text style={styles.label}>Selecciona una opción</Text>
        <Pressable style={styles.dropdownButton} onPress={() => setOpen(true)}>
          <Text style={styles.dropdownText}>{selected}</Text>
          <Text style={styles.chevron}>v</Text>
        </Pressable>
        <Text style={styles.selected}>Valor seleccionado: {selected}</Text>
      </View>

      <Modal transparent animationType="fade" visible={open} onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View style={styles.menu}>
            {options.map((option) => (
              <Pressable
                key={option}
                style={[styles.option, selected === option && styles.optionActive]}
                onPress={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                <Text style={[styles.optionText, selected === option && styles.optionTextActive]}>{option}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(15, 23, 42, 0.35)",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  chevron: {
    color: "#0f766e",
    fontSize: 18,
    fontWeight: "800"
  },
  dropdownButton: {
    alignItems: "center",
    borderColor: "#0f766e",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 14
  },
  dropdownText: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "700"
  },
  label: {
    color: "#334155",
    fontSize: 14,
    fontWeight: "800"
  },
  menu: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden"
  },
  option: {
    borderBottomColor: "#e2e8f0",
    borderBottomWidth: 1,
    padding: 16
  },
  optionActive: {
    backgroundColor: "#ccfbf1"
  },
  optionText: {
    color: "#0f172a",
    fontSize: 17
  },
  optionTextActive: {
    color: "#0f766e",
    fontWeight: "800"
  },
  selected: {
    color: "#475569",
    fontSize: 16,
    marginTop: 18
  }
});
