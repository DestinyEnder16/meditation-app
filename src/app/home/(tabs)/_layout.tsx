import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import {
  HomeIcon,
  MeditateIcon,
  MusicIcon,
  ProfileIcon,
  SleepIcon,
} from "../../../constants/images";
import { useUser } from "../../../contexts/userContext";
import { Colors } from "@/src/constants/themes";
import { Fonts } from "@/src/constants/fonts";

function TabIcon({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) {
  return (
    <View
      style={{
        backgroundColor: focused ? Colors.primary : "transparent",
        borderRadius: 16,
        padding: 13,
      }}
    >
      {children}
    </View>
  );
}

export default function TabLayout() {
  const { name } = useUser();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarStyle: {
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <HomeIcon color={!focused ? color : Colors.white} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: "Sleep",
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <SleepIcon color={!focused ? color : Colors.white} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="meditate"
        options={{
          title: "Meditate",
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <MeditateIcon color={!focused ? color : Colors.white} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          title: "Music",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <MusicIcon color={!focused ? color : Colors.white} />
            </TabIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: name || "Profile",
          tabBarIconStyle: styles.icon,
          tabBarLabelStyle: styles.label,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}>
              <ProfileIcon color={!focused ? color : Colors.white} />
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: { marginTop: 15 },
  label: { marginTop: 10, fontFamily: Fonts.medium, fontSize: 12 },
});
