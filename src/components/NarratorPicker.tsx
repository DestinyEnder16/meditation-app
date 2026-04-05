import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { narratorData } from "../constants/data";
import { Colors } from "../constants/themes";
import { useState } from "react";
import { Fonts } from "../constants/fonts";
import MusicField from "./MusicField";

export default function NarratorPicker() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSong, setActiveSong] = useState(0);

  return (
    <View>
      <View style={styles.header}>
        <Pressable onPress={() => setActiveTab(0)}>
          <Text
            style={[styles.text, activeTab === 0 && { color: Colors.primary }]}
          >
            MALE VOICE
          </Text>
          {activeTab === 0 && <View style={styles.activeIndicator} />}
        </Pressable>
        <Pressable onPress={() => setActiveTab(1)}>
          <Text
            style={[styles.text, activeTab === 1 && { color: Colors.primary }]}
          >
            FEMALE VOICE
          </Text>
          {activeTab === 1 && <View style={styles.activeIndicator} />}
        </Pressable>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={narratorData[activeTab]}
        renderItem={({ item, index }) => (
          <View style={styles.musicFieldSection}>
            <MusicField
              title={item.name}
              duration={item.duration}
              activeSong={activeSong}
              index={index}
              setActiveIndex={setActiveSong}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
    justifyContent: "space-between",
    marginBottom: 30,
    paddingRight: 80,
  },

  activeIndicator: {
    height: 2,
    width: "50%",
    backgroundColor: Colors.primary,
    alignSelf: "center",
    borderRadius: 1,
    marginTop: 8,
  },
  text: {
    color: Colors.gray,
    fontFamily: Fonts.medium,
  },
  musicFieldSection: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
  },
});
