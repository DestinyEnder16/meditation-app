import { StyleSheet, Text, View } from "react-native";
import { MusicBarFavorite, MusicBarHeadphone } from "../constants/images";
import { Fonts } from "../constants/fonts";

interface MusicBarProps {
  numFavorites: number;
  numListening: number;
  favoriteIconColor: string;
  headphoneIconColor: string;
  textColor: string;
}

export default function MusicBar({
  numFavorites,
  numListening,
  favoriteIconColor,
  headphoneIconColor,
  textColor,
}: MusicBarProps) {
  // this allows the formatting of numbers with commas - based on user's locale
  const fmt = (n: number) => new Intl.NumberFormat().format(n);

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <MusicBarFavorite color={favoriteIconColor} />
        <Text style={[styles.text, { color: textColor }]}>
          {fmt(numFavorites)} Favorits
        </Text>
      </View>

      <View style={styles.field}>
        <MusicBarHeadphone color={headphoneIconColor} />
        <Text style={[styles.text, { color: textColor }]}>
          {fmt(numListening)} Lestening
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 50,
    marginTop: 30,
  },

  field: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  text: {
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
});
