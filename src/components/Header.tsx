import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../constants/fonts";
import { Colors } from "../constants/themes";

type headerProps = {
  header: string;
  info: string;
  alignCenter?: boolean;
  headerFontSize?: number;
  infoFontSize?: number;
};

function Header({
  header,
  info,
  alignCenter,
  headerFontSize,
  infoFontSize,
}: headerProps) {
  return (
    <View style={{ gap: 10 }}>
      <Text
        style={[
          styles.header,
          { textAlign: alignCenter ? "center" : "left" },
          headerFontSize ? { fontSize: headerFontSize } : null,
        ]}
      >
        {header}
      </Text>
      <Text
        style={[
          styles.info,
          { textAlign: alignCenter ? "center" : "left" },
          infoFontSize ? { fontSize: infoFontSize } : null,
        ]}
      >
        {info}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: 28,
    lineHeight: 35,
    color: Colors.dark,
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
