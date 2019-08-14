import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Handshake from "./Handshake";
import SignUp from "./SignUp";
import Login from "./Login";
import styles from "./Styling/homeScreenStyling";
import HeaderBar from "./HeaderBar";

class HomeContainer extends React.Component {
  render() {
    const { details } = this.props.screenProps;
    return (
      <View style={styles.homeScreen}>
        <HeaderBar />
        <Text style={styles.welcomeTitle}>
          Hello{details.logged_in ? ` ${details.user.first_name}` : null},
          welcome to MEDIREP!
        </Text>

        {details.logged_in ? null : (
          <Button
            title="Login"
            onPress={() => this.props.navigation.push("Login")}
          />
        )}
        {details.logged_in ? null : (
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.push("SignUp")}
          />
        )}
        {details.logged_in ? (
          <Button
            title="Log out"
            onPress={() => this.props.screenProps.logout()}
          />
        ) : null}
        {details.logged_in ? (
          <Button
            title="Pair Alexa"
            onPress={() => this.props.navigation.push("Handshake")}
          />
        ) : null}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeContainer,
    Login: Login,
    SignUp: SignUp,
    Handshake: Handshake
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class HomeScreen extends React.Component {
  render() {
    const details = this.props.screenProps;
    return <AppContainer screenProps={details} />;
  }
}
