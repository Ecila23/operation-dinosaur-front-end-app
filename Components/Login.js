import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/formStyling";
import HeaderBar from "./HeaderBar";
import { ScrollView } from "react-native-gesture-handler";

class Login extends Component {
  state = {
    firstName: null,
    user_id: "",
    password: ""
  };

  onPressButton = () => {
    const { user_id } = this.state;
    api
      .getUser(user_id)
      .then(user => {
        this.setState({ user_id: user.id, firstName: user.first_name });
      })
      .then(() => {
        this.props.screenProps.setUser(this.state.user_id);
      });
  };

  render() {
    return (
      <View>
        <HeaderBar />
        <ScrollView>
          <Text style={styles.formTitle}>Login</Text>
          <Text style={styles.formText}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.formTextInput}
            onChangeText={user_id => this.setState({ user_id })}
            value={this.state.user_id.toString()}
            editable={true}
          />
          <Text style={styles.formText}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.formTextInput}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.password.toString()}
            editable={true}
          />
          <Button
            style={styles.formButton}
            title="Submit"
            onPress={this.onPressButton}
          >
            <Text>Submit</Text>
          </Button>
          <Text style={styles.formText}>
            Logged in as: {this.state.firstName}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
