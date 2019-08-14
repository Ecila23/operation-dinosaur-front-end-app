import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/formStyling";
import HeaderBar from "./HeaderBar";

class AddMeds extends Component {
  state = {
    user_id: 1,
    type: "",
    due: ""
  };

  onPressButton = () => {
    const { user_id, type, due } = this.state;
    api.postNewMedication(user_id, type, due).then(
      this.setState({
        type: "",
        due: ""
      })
    );
  };
  render() {
    return (
      <View>
        <HeaderBar />
        <Text style={styles.formText}>Medication Name</Text>
        <TextInput
          placeholder="Name of medication"
          style={styles.formTextInput}
          onChangeText={type => this.setState({ type })}
          value={this.state.type}
          editable={true}
        />
        <Text style={styles.formText}>Time Due</Text>
        <TextInput
          placeholder="Time Due"
          style={styles.formTextInput}
          onChangeText={due => this.setState({ due })}
          value={this.state.due}
          editable={true}
        />
        <Button
          style={styles.formButton}
          title="Submit"
          onPress={this.onPressButton}
        >
          <Text>Submit</Text>
        </Button>
        <Text
          style={{
            marginTop: 10,
            textAlign: "center",
            fontSize: 16,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 15
          }}
        >
          If your pill is taken more than once per day, please enter the pill
          and due time for each instance
        </Text>
      </View>
    );
  }
}

export default AddMeds;
