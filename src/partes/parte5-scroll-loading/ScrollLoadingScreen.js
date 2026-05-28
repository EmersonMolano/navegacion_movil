import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "../../shared/styles";

const data = Array.from({ length: 24 }, (_, index) => ({
  id: String(index + 1),
  title: `Elemento ${index + 1}`,
  description: "Registro mostrado dentro de FlatList con desplazamiento vertical."
}));

export default function ScrollLoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={sharedStyles.screen}>
      <Text style={sharedStyles.title}>Scroll Loading</Text>
      <Text style={sharedStyles.text}>FlatList con desplazamiento vertical e indicador de carga visible.</Text>

      {loading ? (
        <View style={styles.loadingBox}>
          <ActivityIndicator color="#be123c" size="large" />
          <Text style={styles.loadingText}>Cargando elementos...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContent}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.rowTitle}>{item.title}</Text>
              <Text style={styles.rowDescription}>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 32,
    paddingTop: 14
  },
  loadingBox: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 18,
    minHeight: 180
  },
  loadingText: {
    color: "#475569",
    fontSize: 16,
    marginTop: 12
  },
  row: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 14
  },
  rowDescription: {
    color: "#64748b",
    fontSize: 14,
    marginTop: 4
  },
  rowTitle: {
    color: "#0f172a",
    fontSize: 17,
    fontWeight: "800"
  }
});
