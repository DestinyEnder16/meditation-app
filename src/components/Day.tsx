import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/themes";

interface dayProps {
  data: string;
  id: number;
  isSelected: boolean;
  fn: () => void;
}

const styles = StyleSheet.create({
  day: {
    borderWidth: 1,
    borderRadius: 1000,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

function Day({ data, fn, id, isSelected }: dayProps) {
  return (
    <>
      <Pressable
        style={[styles.day, isSelected && { backgroundColor: Colors.dark }]}
        onPress={() => fn()}
      >
        <Text style={isSelected && { color: Colors.white }}>{data}</Text>
      </Pressable>
    </>
  );
}

export default Day;
