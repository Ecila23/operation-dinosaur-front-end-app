import React from "react";
import { Text, View, Header } from "react-native";
import styles from "./Styling/headerFooterStyling";

const HeaderBar = () => {
  return (
    <View style={styles.headerMain}>
      <Text style={styles.headerLeft}>MEDIREP</Text>
      <Text style={styles.headerCenter} />
      <Text style={styles.headerRight} />
    </View>
  );
};

export default HeaderBar;
