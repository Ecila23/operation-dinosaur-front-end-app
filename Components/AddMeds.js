import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";

class AddMeds extends Component {
  state = {
    user_id: 1,
    type: "please enter pills here",
    due: "please enter the time the pill is due here"
  };

  onPressButton = () => {
    const { user_id, type, due } = this.state;
    api.postNewMedication(user_id, type, due).then(
      this.setState({
        type: "please enter pills here",
        due: "please enter the time the pill is due here"
      })
    );
  };
  render() {
    return (
      <View>
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={type => this.setState({ type })}
          value={this.state.type}
          editable={true}
          onFocus={() => this.setState({ type: "" })}
        />
        <TextInput
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={due => this.setState({ due })}
          value={this.state.due}
          editable={true}
          onFocus={() => this.setState({ due: "" })}
        />
        <Button
          style={{
            justifyContent: "center",
            textAlign: "center"
          }}
          title="Submit"
          onPress={this.onPressButton}
        >
          <Text>Submit</Text>
        </Button>
        <Text>
          If your pill is taken more than once per day, please enter the pill
          and due time for each instance
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "center"
  }
});

export default AddMeds;
