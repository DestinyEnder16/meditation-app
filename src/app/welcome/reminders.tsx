import Btn from "@/src/components/ActionBtn";
import ContainerView from "@/src/components/ContainerView";
import DayPicker from "@/src/components/DayPicker";
import Header from "@/src/components/Header";
import WheelPicker from "@/src/components/WheelPicker";
import { Fonts } from "@/src/constants/fonts";
import { Colors } from "@/src/constants/themes";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);
const periods = ["AM", "PM"];

function Reminders() {
  const [hour, setHour] = useState("8");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("PM");

  const [selectedId, setSelectedId] = useState([0]);

  function handleSelect(index: number) {
    if (selectedId.includes(index)) {
      setSelectedId((prev) => prev.filter((value) => value !== index));
    } else {
      setSelectedId((prev) => [...prev, index]);
    }
  }

  return (
    <ContainerView addSafeArea>
      <View style={{ gap: 25, paddingTop: 50 }}>
        <Header
          header="What time would you like to meditate?"
          info="Any time you can choose but we recommend first thing in the morning."
        />

        {/*IMPORTANT : TIME PICKER*/}
        <View
          style={{
            flexDirection: "row",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <WheelPicker items={hours} selectedValue={hour} onChange={setHour} />
          <WheelPicker
            items={minutes}
            selectedValue={minute}
            onChange={setMinute}
          />
          <WheelPicker
            items={periods}
            selectedValue={period}
            onChange={setPeriod}
            infinite={false}
          />
        </View>

        <View>
          <Header
            header="Which day would you like to meditate?"
            info="Everyday is best, but we recommend picking at least five."
          />

          <DayPicker selectedId={selectedId} handleSelectId={handleSelect} />
        </View>

        {selectedId.length > 0 && (
          <View style={{ gap: 15, marginTop: 20 }}>
            <Btn
              text="SAVE"
              txtColor={Colors.white}
              onPress={() => router.navigate("/home" as any)}
            />
            <Text style={{ textAlign: "center", fontFamily: Fonts.medium }}>
              NO THANKS
            </Text>
          </View>
        )}
      </View>
    </ContainerView>
  );
}

export default Reminders;
