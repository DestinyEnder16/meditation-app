import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  CategoryTabAll,
  CategoryTabEmotion,
  CategoryTabFavorite,
  CategoryTabKids,
  CategoryTabSleep,
} from '../constants/images';
import { Colors } from '../constants/themes';
import CategoryTab from './CategoryTab';

interface tabProps {
  bgColor?: string;
  activeTxtColor?: string;
}

export default function FilterCategoryTabs({
  bgColor = Colors.gray,
  activeTxtColor,
}: tabProps) {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      // to ensure the scroll view doesn't grow beyond its content
      style={{ flexGrow: 0 }}
    >
      <CategoryTab
        title="All"
        icon={<CategoryTabAll />}
        bgColor={bgColor}
        activeColor={Colors.primary}
        activeTab={activeTab}
        activeTxtColor={activeTxtColor}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="My"
        icon={<CategoryTabFavorite />}
        bgColor={bgColor}
        activeTxtColor={activeTxtColor}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Anxious"
        icon={<CategoryTabEmotion />}
        bgColor={bgColor}
        activeColor={Colors.primary}
        activeTab={activeTab}
        activeTxtColor={activeTxtColor}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Sleep"
        icon={<CategoryTabSleep />}
        bgColor={bgColor}
        activeTxtColor={activeTxtColor}
        activeColor={Colors.primary}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <CategoryTab
        title="Kids"
        icon={<CategoryTabKids />}
        bgColor={bgColor}
        activeColor={Colors.primary}
        activeTab={activeTab}
        activeTxtColor={activeTxtColor}
        setActiveTab={setActiveTab}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 20,
    paddingLeft: 24,
  },
});
