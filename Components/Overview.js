import React from "react";
import { Text, View, Dimensions, ScrollView } from "react-native";
import { PieChart, LineChart } from "react-native-chart-kit";

const OverviewScreen = props => {
  const { meds } = props.screenProps.details.meds;
  const { quiz } = props.screenProps.details;
  const takenQuantity = meds.filter(({ status }) => status === 10).length;
  const missedQuantity = meds.length - takenQuantity;

  const moodResults = quiz.map(function(quiz) {
    return quiz.mood;
  });
  const slownessResults = quiz.map(function(quiz) {
    return quiz.slowness;
  });
  const stiffnessResults = quiz.map(function(quiz) {
    return quiz.stiffness;
  });
  const tremorResults = quiz.map(function(quiz) {
    return quiz.tremor;
  });

  return (
    <ScrollView>
      <Text>Meds Taken</Text>
      <PieChart
        data={[
          { name: "Taken", quantity: takenQuantity, color: "chartreuse" },
          { name: "Not Taken", quantity: missedQuantity, color: "#00FF00" }
        ]}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        accessor="quantity"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      <Text>Mood Chart</Text>
      <LineChart
        data={{
          labels: [
            "Friday",
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday"
          ],
          datasets: [
            {
              data: moodResults.slice(-7),
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              strokeWidth: 2
            }
          }}
          accessor="quantity"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <Text style={styles.graphTitle}>Mood Results</Text>
        <LineChart
          data={{
            labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
              {
                data: moodResults.slice(-7),
                color: () => `#003087`,
                strokeWidth: 2
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#E8EDEE",
            backgroundGradientFrom: "#FAE100",
            backgroundGradientTo: "#005EB8",
            decimalPlaces: 2,
            color: () => `white`,
            style: {
              borderRadius: 26
            }
          }}
        />
        <Text style={styles.graphTitle}>Slowness Results</Text>
        <LineChart
          data={{
            labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
              {
                data: slownessResults.slice(-7),
                color: () => `#003087`,
                strokeWidth: 2
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#E8EDEE",
            backgroundGradientFrom: "#FAE100",
            backgroundGradientTo: "#005EB8",
            decimalPlaces: 2,
            color: () => `white`,
            style: {
              borderRadius: 16
            }
          }}
        />
        <Text style={styles.graphTitle}>Stiffness Results</Text>
        <LineChart
          data={{
            labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
              {
                data: stiffnessResults.slice(-7),
                color: () => `#003087`,
                strokeWidth: 2
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#E8EDEE",
            backgroundGradientFrom: "#FAE100",
            backgroundGradientTo: "#005EB8",
            decimalPlaces: 2,
            color: () => `white`,
            style: {
              borderRadius: 16
            }
          }}
        />
        <Text style={styles.graphTitle}>Tremor Results</Text>
        <LineChart
          data={{
            labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
            datasets: [
              {
                data: tremorResults.slice(-7),
                color: () => `#003087`,
                strokeWidth: 2
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={{
            backgroundColor: "#E8EDEE",
            backgroundGradientFrom: "#FAE100",
            backgroundGradientTo: "#005EB8",
            decimalPlaces: 2,
            color: () => `white`,
            style: {
              borderRadius: 16
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

export default OverviewScreen;
