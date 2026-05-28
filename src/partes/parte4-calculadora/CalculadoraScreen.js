import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

export default function CalculadoraScreen() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("Ingresa dos números.");

  const values = useMemo(() => ({
    a: Number(first.replace(",", ".")),
    b: Number(second.replace(",", "."))
  }), [first, second]);

  function calculate(operation) {
    if (first.trim() === "" || second.trim() === "" || Number.isNaN(values.a) || Number.isNaN(values.b)) {
      setResult("Validación: escribe dos números válidos.");
      return;
    }

    if (operation === "/" && values.b === 0) {
      setResult("No se puede dividir entre cero.");
      return;
    }

    const operations = {
      "+": values.a + values.b,
      "-": values.a - values.b,
      "x": values.a * values.b,
      "/": values.a / values.b
    };

    setResult(`${values.a} ${operation} ${values.b} = ${operations[operation]}`);
  }

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Calculadora básica</Text>
      <Text style={sharedStyles.text}>Suma, resta, multiplicación y división con actualización dinámica del resultado.</Text>

      <View style={styles.form}>
        <TextInput
          keyboardType="decimal-pad"
          onChangeText={setFirst}
          placeholder="Primer número"
          style={sharedStyles.input}
          value={first}
        />
        <TextInput
          keyboardType="decimal-pad"
          onChangeText={setSecond}
          placeholder="Segundo número"
          style={sharedStyles.input}
          value={second}
        />
      </View>

      <View style={styles.operations}>
        {["+", "-", "x", "/"].map((operation) => (
          <Pressable key={operation} style={styles.operationButton} onPress={() => calculate(operation)}>
            <Text style={styles.operationText}>{operation}</Text>
          </Pressable>
        ))}
      </View>

      <View style={sharedStyles.panel}>
        <Text style={styles.resultLabel}>Resultado</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginTop: 18
  },
  operationButton: {
    alignItems: "center",
    backgroundColor: "#7c3aed",
    borderRadius: 8,
    flex: 1,
    minHeight: 52,
    justifyContent: "center"
  },
  operationText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900"
  },
  operations: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16
  },
  result: {
    color: "#0f172a",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 6
  },
  resultLabel: {
    color: "#64748b",
    fontSize: 14,
    fontWeight: "800",
    textTransform: "uppercase"
  }
});
