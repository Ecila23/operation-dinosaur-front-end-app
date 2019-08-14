import React from "react";
import { Text, View, ScrollView } from "react-native";
import moment from "moment";
import styles from "./Styling/eventsStyling";
import HeaderBar from "./HeaderBar";

const EventsScreen = props => (
  <View style={styles.eventsMain}>
    <HeaderBar />
    <Text style={styles.eventsTitle}>Events</Text>
    <ScrollView style={styles.eventsScrollView}>
      {props.screenProps.details.events
        ? props.screenProps.details.events.map(
            ({ id, time, description, user_id }) => (
              <View key={id} style={styles.eventsSingle}>
                <View style={styles.eventCard}>
                  <Text style={styles.eventsText}>{`Time: ${moment(time).format(
                    "DD-MM-YYYY HH:MM"
                  )}`}</Text>
                  <Text
                    style={styles.eventsText}
                  >{`Event: ${description}`}</Text>
                </View>
              </View>
            )
          )
        : null}
    </ScrollView>
  </View>
);

export default EventsScreen;
