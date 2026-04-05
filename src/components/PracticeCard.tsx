import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import InfoText from "./InfoText";
import { Colors } from "../constants/themes";
import { Fonts } from "../constants/fonts";
import { DarkPlayBtn, PlayBtn } from "../constants/images";

interface PracticeCardProps {
  title: string;
  info1: string;
  info2: string;
  titleColor?: string;
  infoColor?: string;
  backgroundImg: ImageSourcePropType;
  backgroundColor: string;
  useDarkBtn?: boolean;
}

export default function PracticeCard({
  title,
  info1,
  info2,
  backgroundImg,
  backgroundColor,
  useDarkBtn = false,
  infoColor = "#5A6175",
  titleColor = Colors.dark,
}: PracticeCardProps) {
  return (
    <View style={{ backgroundColor, borderRadius: 10 }}>
      <ImageBackground source={backgroundImg}>
        <View style={styles.card}>
          <View>
            <Text style={[styles.title, { color: titleColor }]}>{title}</Text>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={[styles.info, { color: infoColor }]}>{info1}</Text>
              <Text style={{ color: infoColor }}>•</Text>
              <Text style={[styles.info, { color: infoColor }]}>{info2}</Text>
            </View>
          </View>

          <View>{useDarkBtn ? <DarkPlayBtn /> : <PlayBtn />}</View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 95,
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  info: {
    fontSize: 11,
    fontFamily: Fonts.medium,
  },
});
