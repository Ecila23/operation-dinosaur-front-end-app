import React, { StyleSheet } from "react-native";
import { Row } from "native-base";

export default (styles = StyleSheet.create({
  medsMain: {
    backgroundColor: "white"
  },
  medSingle: {
    paddingTop: 20
  },
  medsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center"
  },
  medScrollView: {
    paddingTop: 10,
    marginBottom: 170
  },
  medCard: {
    backgroundColor: "#E8EDEE",
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  medText: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: "center",
    textTransform: "capitalize"
  },
  medsScreenButton: {
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 90,
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  medsScreenButtonTaken: {
    justifyContent: "flex-end",
    textAlign: "center",
    marginHorizontal: 90,
    marginVertical: 1,
    fontWeight: "bold"
  },
  medsScreenButtonDelete: {
    justifyContent: "flex-end",
    textAlign: "center",
    marginHorizontal: 90,
    marginTop: 1,
    marginBottom: 15,
    fontWeight: "bold"
  }
}));
