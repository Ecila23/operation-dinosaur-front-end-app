import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  formMain: {
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: "white"
  },
  formTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center"
  },
  formTextInput: {
    borderColor: "#003087",
    borderRadius: 15,
    borderWidth: 1.5,
    height: 50,
    marginHorizontal: 20,
    paddingHorizontal: 2,
    textAlign: "center"
  },
  formButton: {
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 90,
    marginTop: 10,
    fontWeight: "bold",
    backgroundColor: "#FAE100"
  },
  formText: {
    padding: 10,
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold"
  }
}));
