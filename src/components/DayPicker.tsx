import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Day from './Day';

export const daysOfWeek = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
});

function DayPicker() {
  const [selectedId, setSelectedId] = useState([0]);

  function handleSelect(index: number) {
    if (selectedId.includes(index)) {
      setSelectedId((prev) => prev.filter((value) => value !== index));
    } else {
      setSelectedId((prev) => [...prev, index]);
    }
  }

  return (
    <View style={styles.container}>
      {daysOfWeek.map((day, index) => (
        <Day
          key={index}
          data={day}
          id={index}
          isSelected={selectedId.includes(index)}
          // isSelected={selectedId.find(id === index)}
          fn={() => handleSelect(index)}
        />
      ))}
    </View>
  );
}

export default DayPicker;
