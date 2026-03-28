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

const hours = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  String(i).padStart(2, "0"),
);
const periods = ["AM", "PM"];

function Reminders() {
  const [hour, setHour] = useState("08");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("PM");

  return (
    <ContainerView addSafeArea>
      <View style={{ gap: 25, paddingTop: 50 }}>
        <Header
          header="What time would you like to meditate?"
          info="Any time you can choose but we recommend first thing in the morning."
        />

        <View style={{ flexDirection: "row", borderRadius: 20 }}>
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
          />
        </View>

        <View>
          <Header
            header="Which day would you like to meditate?"
            info="Everyday is best, but we recommend picking at least five."
          />

          <DayPicker />
        </View>

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
      </View>
    </ContainerView>
  );
}

export default Reminders;
