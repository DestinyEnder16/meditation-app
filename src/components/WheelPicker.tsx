import React, { useCallback, useEffect, useRef } from "react";
import { Animated, FlatList, Pressable, StyleSheet, View } from "react-native";
import { Fonts } from "../constants/fonts";

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 5;
export const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;

const REPEAT_COUNT = 80;

interface Props {
  items: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  infinite?: boolean;
}

const WheelPicker: React.FC<Props> = ({
  items,
  selectedValue,
  onChange,
  infinite = true,
}) => {
  const listRef = useRef<FlatList<string>>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const data = React.useMemo(() => {
    if (!infinite) return items;
    const result: string[] = [];
    for (let i = 0; i < REPEAT_COUNT; i++) {
      result.push(...items);
    }
    return result;
  }, [items, infinite]);

  const selectedIndex = items.indexOf(selectedValue);
  const initialIndex = infinite
    ? Math.floor(REPEAT_COUNT / 2) * items.length + Math.max(0, selectedIndex)
    : Math.max(0, selectedIndex);

  useEffect(() => {
    const t = setTimeout(() => {
      listRef.current?.scrollToOffset({
        offset: initialIndex * ITEM_HEIGHT,
        animated: false,
      });
    }, 50);
    return () => clearTimeout(t);
  }, []);

  const recenter = useCallback(
    (rawIndex: number) => {
      if (!infinite) return;
      const itemIndex =
        ((rawIndex % items.length) + items.length) % items.length;
      const middleRepeat = Math.floor(REPEAT_COUNT / 2);
      const centeredIndex = middleRepeat * items.length + itemIndex;

      if (Math.abs(rawIndex - centeredIndex) > items.length * 2) {
        listRef.current?.scrollToOffset({
          offset: centeredIndex * ITEM_HEIGHT,
          animated: false,
        });
      }
    },
    [items.length, infinite],
  );

  const onMomentumScrollEnd = useCallback(
    (e: any) => {
      const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
      if (infinite) {
        const itemIndex =
          ((index % items.length) + items.length) % items.length;
        onChange(items[itemIndex]);
        recenter(index);
      } else {
        onChange(items[Math.max(0, Math.min(index, items.length - 1))]);
      }
    },
    [items, onChange, recenter, infinite],
  );

  const renderItem = useCallback(
    ({ index }: { item: string; index: number }) => {
      const inputRange = [
        (index - 2) * ITEM_HEIGHT,
        (index - 1) * ITEM_HEIGHT,
        index * ITEM_HEIGHT,
        (index + 1) * ITEM_HEIGHT,
        (index + 2) * ITEM_HEIGHT,
      ];

      const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [0.2, 0.5, 1, 0.5, 0.2],
        extrapolate: "clamp",
      });

      const scale = scrollY.interpolate({
        inputRange,
        outputRange: [0.75, 0.85, 1, 0.85, 0.75],
        extrapolate: "clamp",
      });

      const rotateX = scrollY.interpolate({
        inputRange,
        outputRange: ["55deg", "25deg", "0deg", "-25deg", "-55deg"],
        extrapolate: "clamp",
      });

      const translateY = scrollY.interpolate({
        inputRange,
        outputRange: [8, 4, 0, -4, -8],
        extrapolate: "clamp",
      });

      const actualItem = infinite
        ? items[((index % items.length) + items.length) % items.length]
        : items[index];

      const handlePress = () => {
        listRef.current?.scrollToOffset({
          offset: index * ITEM_HEIGHT,
          animated: true,
        });
        const itemIndex = infinite
          ? ((index % items.length) + items.length) % items.length
          : index;
        onChange(items[itemIndex]);
      };

      return (
        <Pressable onPress={handlePress}>
          <Animated.View
            style={[
              styles.item,
              {
                opacity,
                transform: [
                  { perspective: 800 },
                  { rotateX },
                  { scale },
                  { translateY },
                ],
              },
            ]}
          >
            <Animated.Text style={styles.itemText}>{actualItem}</Animated.Text>
          </Animated.View>
        </Pressable>
      );
    },
    [scrollY, items, infinite],
  );

  return (
    <View style={styles.container}>
      <View style={styles.selectionIndicator} pointerEvents="none" />
      <Animated.FlatList
        ref={listRef as any}
        data={data}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        onMomentumScrollEnd={onMomentumScrollEnd}
        contentContainerStyle={styles.contentContainer}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        initialScrollIndex={initialIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: PICKER_HEIGHT,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#F5F5F9",
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
    color: "#333",
    fontFamily: Fonts.bold,
  },
  selectionIndicator: {
    position: "absolute",
    top: ITEM_HEIGHT * 2,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#c8c8c8",
    zIndex: 1,
  },
  contentContainer: {
    paddingTop: ITEM_HEIGHT * 2,
    paddingBottom: ITEM_HEIGHT * 2,
  },
});

export default WheelPicker;
