import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20
  },
  title: {
    color: "#0f172a",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 8
  },
  text: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 23
  },
  panel: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 18,
    padding: 16
  },
  button: {
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "800"
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
    borderRadius: 8,
    borderWidth: 1,
    color: "#0f172a",
    fontSize: 18,
    paddingHorizontal: 14,
    paddingVertical: 12
  }
});
