import React, { Component } from "react";
import { View } from "react-native";
import HomeScreen from "./Components/HomeScreen";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import DiaryScreen from "./Components/Diary";
import MedicationNavigator from "./Components/MedScreen";
import EventsScreen from "./Components/Events";
import OverviewScreen from "./Components/Overview";
import api from "./Utils/apiUtils";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import styles from "./Components/Styling/headerFooterStyling";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faQuestion,
  faPills,
  faExclamation,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    user_id: 1,
    logged_in: false,
    user: {},
    events: [],
    quiz: {},
    meds: [],
    token: null,
    notification: null
  };

  componentDidMount() {
    const { user_id } = this.state;
    let fetches = [
      api.getUser(user_id),
      api.getEvents(user_id),
      api.getQuiz(user_id),
      api.getMeds(user_id)
    ];

    return Promise.all(fetches).then(([user, events, quiz, meds]) => {
      this.setState({
        user,
        events,
        quiz,
        meds
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user_id !== this.state.user_id) {
      this.componentDidMount();
    }
  }

  setUser = user_id => {
    this.setState({ user_id: user_id, logged_in: true });
  };

  logout = () => {
    this.setState({ logged_in: false });
  };

  render() {
    const details = this.state;
    const setUser = this.setUser;
    const logout = this.logout;
    return <AppContainer screenProps={{ details, setUser, logout }} />;
  }

  async registerPush() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
      if (status !== "granted") {
        return;
      }
    }
    const token = await Notifications.getExpoPushTokenAsync();
    this.subscription = Notifications.addListener(this.handleNotification);
    this.setState({ token });
  }

  handleNotification = notification => {
    this.setState({ notification });
  };

  componentWillMount() {
    this.registerPush();
  }
}

const NavBar = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <FontAwesomeIcon icon={faHome} />
          </View>
        )
      }
    },
    Quiz: {
      screen: DiaryScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <FontAwesomeIcon icon={faQuestion} />
          </View>
        )
      }
    },
    Medication: {
      screen: MedicationNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <FontAwesomeIcon icon={faPills} />
          </View>
        )
      }
    },
    Events: {
      screen: EventsScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <FontAwesomeIcon icon={faExclamation} />
          </View>
        )
      }
    },
    Overview: {
      screen: OverviewScreen,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <FontAwesomeIcon icon={faBookOpen} />
          </View>
        )
      }
    }
  },
  {
    shifting: false,
    initialRouteName: "Home",
    activeColor: "#FAE100",
    inactiveColor: "white",
    barStyle: styles.barStyle
  }
);
const AppContainer = createAppContainer(NavBar);

export default App;
