import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  handshakeMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    backgroundColor: "white"
  },
  handshakeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center"
  },
  handshakeText: {
    fontSize: 18,
    margin: 10,
    textAlign: "center"
  },
  codeText: {
    fontWeight: "bold",
    fontSize: 50,
    margin: 30,
    textAlign: "center",
    color: "#005EB8"
  }
}));
