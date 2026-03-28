import Btn from "@/src/components/ActionBtn";
import ContainerView from "@/src/components/ContainerView";
import { Fonts } from "@/src/constants/fonts";
import { WelcomeLogo } from "@/src/constants/images";
import { Colors } from "@/src/constants/themes";
import { useUser } from "@/src/contexts/userContext";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeIndex() {
  const { name } = useUser();
  return (
    <View
      style={{
        position: "relative",
        paddingTop: 15,
        flex: 1,
        backgroundColor: Colors.primary,
      }}
    >
      <Image
        resizeMode="contain"
        source={require("@/assets/images/image.png")}
        style={styles.background}
      />
      <ContainerView addSafeArea transparent>
        <View style={{ alignSelf: "center" }}>
          <WelcomeLogo />
        </View>

        <View style={{ alignItems: "center", marginTop: 50, gap: 15 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.h1}>Hi {name}, Welcome</Text>
            <Text style={styles.h2}>To Silent Moon</Text>
          </View>
          <Text style={styles.h3}>
            Explore the app, Find some peace of mind to prepare for meditation.
          </Text>
        </View>

        <View style={{ width: "100%", position: "absolute", bottom: 70 }}>
          <Btn
            text="Get Started"
            txtColor="#333"
            onPress={() => router.navigate("/welcome/topic")}
            styles={{ backgroundColor: Colors.milk }}
          />
        </View>
      </ContainerView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    height: "70%",
    width: "100%",
  },
  h1: {
    fontSize: 30,
    fontFamily: Fonts.medium,
    color: "#FFECCC",
  },
  h2: {
    fontSize: 30,
    fontFamily: Fonts.thin,
    color: "#FFECCC",
  },
  h3: {
    fontSize: 16,
    fontFamily: Fonts.thin,
    color: Colors.milk,
    lineHeight: 30,
    textAlign: "center",
  },
});
