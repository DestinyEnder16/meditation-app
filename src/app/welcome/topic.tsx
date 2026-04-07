import Btn from "@/src/components/ActionBtn";
import Card from "@/src/components/Card";
import ContainerView from "@/src/components/ContainerView";
import TopicHeader from "@/src/components/TopicHeader";
import { topicData } from "@/src/constants/data";
import { Colors } from "@/src/constants/themes";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

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
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.topicHeaderRow}>
          <TopicHeader />

          {selectedTopics.length > 0 && (
            <View style={styles.nextBtnContainer}>
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

        <View style={styles.columnsContainer}>
          <View style={styles.column}>
            {topicData
              .filter((_, i) => i % 2 === 0)
              .map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleSelectTopic(item.id)}
                  style={[
                    styles.topicPressable,
                    {
                      borderColor: selectedTopics.includes(item.id)
                        ? item.bgColor
                        : "transparent",
                    },
                  ]}
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
          <View style={styles.column}>
            {topicData
              .filter((_, i) => i % 2 !== 0)
              .map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => handleSelectTopic(item.id)}
                  style={[
                    styles.topicPressable,
                    {
                      borderColor: selectedTopics.includes(item.id)
                        ? item.bgColor
                        : "transparent",
                    },
                  ]}
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

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 40,
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  topicHeaderRow: {
    flexDirection: "row",
    gap: 40,
    justifyContent: "space-between",
  },
  nextBtnContainer: {
    flex: 1,
    alignSelf: "center",
  },
  columnsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  column: {
    flex: 1,
    gap: 20,
  },
  topicPressable: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 3,
  },
});
