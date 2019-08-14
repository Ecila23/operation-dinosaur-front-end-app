import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  eventsMain: {
    marginTop: 88,
    backgroundColor: "white"
  },
  eventsSingle: {
    paddingBottom: 20
  },
  eventsTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center"
  },
  eventsScrollView: {
    paddingTop: 10,
    marginBottom: 120
  },
  eventCard: {
    marginBottom: 5,
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  eventsText: {
    backgroundColor: "#E8EDEE",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 15,
    textAlign: "center",
    textTransform: "capitalize"
  }
}));
