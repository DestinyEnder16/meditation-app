import { Text, View } from "react-native";
import { Fonts } from "../constants/fonts";

export default function TopicHeader() {
  return (
    <View style={{ alignSelf: "flex-start", marginBottom: 20 }}>
      <Text style={{ fontFamily: Fonts.medium, fontSize: 28 }}>
        What Brings you
      </Text>
      <Text style={{ fontFamily: Fonts.thin, fontSize: 28 }}>
        to Silent Moon
      </Text>

      <Text style={{ fontFamily: Fonts.thin, fontSize: 20 }}>
        choose a topic to focus on:
      </Text>
    </View>
  );
}
