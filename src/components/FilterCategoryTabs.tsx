import { ScrollView, Text, View } from "react-native";
import CategoryTab from "./CategoryTab";
import {
  CategoryTabAll,
  CategoryTabEmotion,
  CategoryTabFavorite,
  CategoryTabKids,
  CategoryTabSleep,
} from "../constants/images";
import { Colors } from "../constants/themes";
import { useState } from "react";

export default function FilterCategoryTabs() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 20,
      }}
      // to ensure the scroll view doesn't grow beyond its content
      style={{ flexGrow: 0 }}
    >
      <CategoryTab
        title="All"
        icon={<CategoryTabAll />}
        bgColor={Colors.gray}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="My"
        icon={<CategoryTabFavorite />}
        bgColor={Colors.gray}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Anxious"
        icon={<CategoryTabEmotion />}
        bgColor={Colors.gray}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Sleep"
        icon={<CategoryTabSleep />}
        bgColor={Colors.gray}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Kids"
        icon={<CategoryTabKids />}
        bgColor={Colors.gray}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </ScrollView>
  );
}
