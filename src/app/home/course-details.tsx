import { View, Text, Pressable, StyleSheet } from "react-native";
import ContainerView from "../../components/ContainerView";
import SectionInfo from "@/src/components/SectionInfo";
import SectionHeader from "@/src/components/SectionHeader";
import MusicBar from "@/src/components/MusicBar";
import { Colors } from "@/src/constants/themes";
import NarratorPicker from "@/src/components/NarratorPicker";
import { Fonts } from "@/src/constants/fonts";

export default function CourseDetails() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Morning" : hour < 18 ? "Afternoon" : "Evening";

  return (
    <View>
      <SectionHeader
        headerBackground={require("@/assets/images/sleep__section-header.png")}
      />
      <View style={styles.content}>
        <SectionInfo
          header={`Happy ${greeting}`}
          info="COURSE"
          description="Ease the mind into a restful night's sleep with these deep, ambient tones."
        />

        <MusicBar
          numFavorites={24234}
          numListening={34234}
          favoriteIconColor="#FF84A2"
          headphoneIconColor="#7FD2F2"
          textColor={Colors.gray}
        />

        <View>
          <Text style={styles.text}>Pick a narrator</Text>

          <NarratorPicker />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  text: {
    fontFamily: Fonts.bold,
    color: Colors.dark,
    fontSize: 20,
    marginTop: 30,
    marginBottom: 15,
  },
});
