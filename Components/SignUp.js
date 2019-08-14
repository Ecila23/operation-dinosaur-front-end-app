import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "native-base";
import api from "../Utils/apiUtils";
import styles from "./Styling/formStyling";
import HeaderBar from "./HeaderBar";
import { ScrollView } from "react-native-gesture-handler";

class SignUp extends Component {
  state = {
    user_id: null,
    firstName: "",
    surname: "",
    password: "",
    confirmPassword: ""
  };

  onPressButton = () => {
    const { firstName, surname } = this.state;
    api
      .signUp(firstName, surname)
      .then(({ user }) => {
        this.setState({
          user_id: user.id,
          firstName: "",
          surname: "",
          password: "",
          confirmPassword: ""
        });
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
          <Text style={styles.formTitle}>Sign Up</Text>
          <Text style={styles.formText}>First Name:</Text>
          <TextInput
            placeholder="Enter your first name"
            style={styles.formTextInput}
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            editable={true}
          />
          <Text style={styles.formText}>Surname:</Text>
          <TextInput
            placeholder="Enter your surname"
            style={styles.formTextInput}
            onChangeText={surname => this.setState({ surname })}
            value={this.state.surname}
            editable={true}
          />
          <Text style={styles.formText}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            style={styles.formTextInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password.toString()}
            secureTextEntry={true}
            editable={true}
          />
          <Text style={styles.formText}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm your password"
            style={styles.formTextInput}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword.toString()}
            secureTextEntry={true}
            editable={true}
          />
          <Button
            style={styles.formButton}
            title="Submit"
            onPress={this.onPressButton}
          >
            <Text>Submit</Text>
          </Button>
          {this.state.user_id ? (
            <Text>
              Sign up successful! Your user id is: {this.state.user_id}
            </Text>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
