import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  headerMain: {
    paddingVertical: 15,
    paddingLeft: 20,
    backgroundColor: "#005EB8",
    flexDirection: "row",
    alignItems: "center"
  },
  headerLeft: {
    textAlign: "right",
    fontSize: 35,
    fontWeight: "bold",
    color: "white"
  },
  headerCenter: {
    flex: 1
  },
  headerRight: {
    flex: 1
  },
  barStyle: {
    backgroundColor: "#005EB8"
  }
}));
