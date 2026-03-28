import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/themes";

type headerProps = {
  header: string;
  info: string;
};

function Header({ header, info }: headerProps) {
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.medium,
    fontSize: 28,
    lineHeight: 35,
  },
  info: {
    fontFamily: Fonts.thin,
    fontSize: 20,
    lineHeight: 25,
    textAlign: "left",
    color: Colors.gray,
  },
});

export default Header;
