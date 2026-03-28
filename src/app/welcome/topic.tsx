import Btn from "@/src/components/ActionBtn";
import Card from "@/src/components/Card";
import ContainerView from "@/src/components/ContainerView";
import TopicHeader from "@/src/components/TopicHeader";
import { topicData } from "@/src/constants/data";
import { Colors } from "@/src/constants/themes";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);

  function handleSelectTopic(id: number) {
    setSelectedTopics((prev) => {
      if (prev.includes(id)) {
        return prev.filter((t) => t !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <ContainerView addSafeArea usePadding={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: 40,
          alignSelf: "stretch",
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 40,
            justifyContent: "space-between",
          }}
        >
          <TopicHeader />

          {selectedTopics.length > 0 && (
            <View style={{ flex: 1, alignSelf: "center" }}>
              <Btn
                styles={{
                  paddingVertical: 10,
                  backgroundColor: Colors.secondary,
                }}
                text="Next"
                txtColor={Colors.white}
                onPress={() => router.navigate("/welcome/reminders")}
              />
            </View>
          )}
        </View>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1, gap: 20 }}>
            {topicData
              .filter((_, i) => i % 2 === 0)
              .map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleSelectTopic(item.id)}
                  style={{
                    borderWidth: 2,
                    borderColor: selectedTopics.includes(item.id)
                      ? item.bgColor
                      : "transparent",
                    borderRadius: 12,
                    padding: 3,
                  }}
                >
                  <Card
                    icon={item.icon}
                    text={item.text}
                    type={item.type}
                    bgColor={item.bgColor}
                    txtColor={item.txtColor}
                    wrapTxt={item.wrapTxt}
                  />
                </Pressable>
              ))}
          </View>
          <View style={{ flex: 1, gap: 20 }}>
            {topicData
              .filter((_, i) => i % 2 !== 0)
              .map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleSelectTopic(item.id)}
                  style={{
                    borderWidth: 2,
                    borderColor: selectedTopics.includes(item.id)
                      ? item.bgColor
                      : "transparent",
                    borderRadius: 12,
                    padding: 3,
                  }}
                >
                  <Card
                    key={item.text}
                    icon={item.icon}
                    text={item.text}
                    type={item.type}
                    bgColor={item.bgColor}
                    txtColor={item.txtColor}
                    wrapTxt={item.wrapTxt}
                  />
                </Pressable>
              ))}
          </View>
        </View>
      </ScrollView>
    </ContainerView>
  );
}
