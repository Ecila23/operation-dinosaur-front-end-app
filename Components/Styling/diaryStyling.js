import React, { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  diaryMain: {
    marginTop: 88,
    backgroundColor: "white"
  },
  diarySingle: {
    paddingBottom: 20
  },
  diaryTitle: {
    fontSize: 38,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center"
  },
  diaryScrollView: {
    paddingTop: 10,
    marginBottom: 120
  },
  diaryCard: {
    marginBottom: 10,
    marginHorizontal: 50,
    shadowColor: "#768692",
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.9
  },
  diaryText: {
    backgroundColor: "#E8EDEE",
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 55
  }
}));
