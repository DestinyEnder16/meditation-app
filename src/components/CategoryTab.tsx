import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/themes";
import { useState } from "react";
import { Fonts } from "../constants/fonts";

type CategoryTabProps = {
  title: string;
  icon: React.ReactNode;
  bgColor?: string;
  activeColor: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function CategoryTab({
  title,
  icon,
  bgColor,
  activeColor,
  activeTab,
  setActiveTab,
}: CategoryTabProps) {
  const isActive = activeTab === title;
  return (
    <Pressable onPress={() => setActiveTab(title)} style={styles.tab}>
      <View
        style={[
          {
            backgroundColor: !isActive ? (bgColor ?? Colors.gray) : activeColor,
          },
          styles.icon,
        ]}
      >
        {icon}
      </View>
      <Text style={[styles.txt, isActive && { color: Colors.dark }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tab: {
    gap: 8,
    alignItems: "center",
    width: 65,
  },
  icon: {
    padding: 18,
    borderRadius: 25,
  },
  txt: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.gray,
  },
});
