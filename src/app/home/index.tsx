import ContainerView from "@/src/components/ContainerView";
import Header from "@/src/components/Header";
import {
  CourseCard,
  Logo,
  RelaxationCard,
  ThoughtCard,
} from "@/src/constants/images";
import { useUser } from "@/src/contexts/userContext";
import { View, Text } from "react-native";

export default function Home() {
  return (
    <ContainerView addSafeArea>
      <Logo />

      <View style={{ marginTop: 30, alignSelf: "flex-start" }}>
        <Header
          header="Good Morning, Afsar"
          info="We wish you have a good day"
        />
      </View>

      <View style={{ gap: 20, marginTop: 30 }}>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <CourseCard />
          <RelaxationCard />
        </View>

        <View>
          <ThoughtCard />
        </View>
      </View>
    </ContainerView>
  );
}
