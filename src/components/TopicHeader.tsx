import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../constants/fonts";

export default function TopicHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        What Brings you
      </Text>
      <Text style={styles.subheading}>
        to Silent Moon
      </Text>

      <Text style={styles.caption}>
        choose a topic to focus on:
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  heading: {
    fontFamily: Fonts.medium,
    fontSize: 28,
  },
  subheading: {
    fontFamily: Fonts.thin,
    fontSize: 28,
  },
  caption: {
    fontFamily: Fonts.thin,
    fontSize: 20,
  },
});
