import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#E8CBC0", "#636FA4"],
    title: "Haze",
    subtitle: "I know, just don't go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#1D4350", "#A43931"],
    title: "Thunderstorm",
    subtitle: "Watch out!!!",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#4B79A1", "#283E51"],
    title: "Rain",
    subtitle: "I love raining",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#304352", "#d7d2cc"],
    title: "Snow",
    subtitle: "Do you wanna build a snowman?",
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#BA8B02", "#181818"],
    title: "Atmosphere",
    subtitle: "Where is a ghost..",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEAC5E", "#C779D0", "#4BC0C8"],
    title: "Clear",
    subtitle: "Go for a walk wit your Ggamji",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#73C8A9", "#373B44"],
    title: "Clouds",
    subtitle: "I know, sexy boring",
  },
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#000000", "#e74c3c"],
    title: "Mist",
    subtitle: "It's like Cambodia.. you know",
  },
  Dust: {
    iconName: "weather-tornado",
    gradient: ["#190A05", "#870000"],
    title: "Dust",
    subtitle: "I really hate China",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
