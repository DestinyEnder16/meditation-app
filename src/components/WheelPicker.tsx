import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { Fonts } from '../constants/fonts';

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;
export const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

interface Props {
  items: string[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const WheelPicker: React.FC<Props> = ({ items, selectedValue, onChange }) => {
  const listRef = useRef<FlatList<string>>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const selectedIndex = items.indexOf(selectedValue);

  useEffect(() => {
    const t = setTimeout(() => {
      listRef.current?.scrollToOffset({
        offset: selectedIndex * ITEM_HEIGHT,
        animated: false,
      });
    }, 50);
    return () => clearTimeout(t);
  }, []);

  const onMomentumScrollEnd = useCallback(
    (e: any) => {
      const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
      onChange(items[Math.max(0, Math.min(index, items.length - 1))]);
    },
    [items, onChange]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      const inputRange = [
        (index - 2) * ITEM_HEIGHT,
        (index - 1) * ITEM_HEIGHT,
        index * ITEM_HEIGHT,
        (index + 1) * ITEM_HEIGHT,
        (index + 2) * ITEM_HEIGHT,
      ];

      const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [0.15, 0.4, 1, 0.4, 0.15],
        extrapolate: 'clamp',
      });

      return (
        <Animated.View style={styles.item}>
          <Animated.Text style={[styles.itemText, { opacity }]}>
            {item}
          </Animated.Text>
        </Animated.View>
      );
    },
    [scrollY]
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectionIndicator} pointerEvents="none" />
      <Animated.FlatList
        ref={listRef as any}
        data={items}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onMomentumScrollEnd}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: PICKER_HEIGHT,
    overflow: 'hidden',
    flex: 1,
    backgroundColor: '#F5F5F9',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 22,
    color: '#333',
    fontFamily: Fonts.bold,
  },
  selectionIndicator: {
    position: 'absolute',
    top: ITEM_HEIGHT * 2,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c8c8c8',
  },
  contentContainer: {
    paddingTop: ITEM_HEIGHT * 2,
    paddingBottom: ITEM_HEIGHT * 2,
  },
});

export default WheelPicker;
