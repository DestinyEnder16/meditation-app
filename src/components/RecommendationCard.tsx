import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/themes";
import { Fonts } from "../constants/fonts";

interface RecommendationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  duration: string;
  backgroundColor?: string;
}

export default function RecommendationCard({
  icon,
  title,
  description,
  duration,
  backgroundColor,
}: RecommendationCardProps) {
  return (
    <View>
      <View
        style={{
          backgroundColor: backgroundColor ?? "",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row", gap: 5 }}>
        <Text style={styles.txt}>{description}</Text>
        <Text style={styles.txt}>{duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    color: Colors.dark,
    fontSize: 18,
    marginTop: 5,
  },
  txt: {
    fontFamily: Fonts.medium,
    color: Colors.gray,
    fontSize: 12,
  },
});
