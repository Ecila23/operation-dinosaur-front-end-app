import React from "react";
import { Text, View, ScrollView } from "react-native";
import moment from "moment";
import styles from "./Styling/diaryStyling";
import HeaderBar from "./HeaderBar";

const DiaryScreen = props => (
  <View style={styles.diaryMain}>
    <HeaderBar />
    <Text style={styles.diaryTitle}>Quiz Results</Text>
    <ScrollView style={styles.diaryScrollView}>
      {props.screenProps.details.quiz
        ? props.screenProps.details.quiz.map(
            ({ completed_at, mood, stiffness, slowness, tremor, id }) => {
              return (
                <View key={id} style={styles.diarySingle}>
                  <View style={styles.diaryCard}>
                    <Text style={styles.diaryText}>
                      Taken: {moment(completed_at).format("DD-MM-YYYY HH:MM")}
                    </Text>
                    <Text style={styles.diaryText}>Mood score: {mood}</Text>
                    <Text style={styles.diaryText}>
                      Stiffness score: {stiffness}
                    </Text>
                    <Text style={styles.diaryText}>
                      Slowness score: {slowness}
                    </Text>
                    <Text style={styles.diaryText}>Tremor score: {tremor}</Text>
                  </View>
                </View>
              );
            }
          )
        : null}
    </ScrollView>
  </View>
);

export default DiaryScreen;
