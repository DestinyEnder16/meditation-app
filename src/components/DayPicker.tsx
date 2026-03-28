import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Day from "./Day";

export const daysOfWeek = ["SU", "M", "T", "W", "TH", "F", "S"];

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
});

interface dayPickerProps {
  selectedId: number[];
  handleSelectId: (index: number) => void;
}

function DayPicker({ selectedId, handleSelectId }: dayPickerProps) {
  // const [selectedId, setSelectedId] = useState([0]);

  return (
    <View style={styles.container}>
      {daysOfWeek.map((day, index) => (
        <Day
          key={index}
          data={day}
          id={index}
          isSelected={selectedId.includes(index)}
          fn={() => handleSelectId(index)}
        />
      ))}
    </View>
  );
}

export default DayPicker;
