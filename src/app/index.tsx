import Btn from "@/src/components/ActionBtn";
import ContainerView from "@/src/components/ContainerView";
import InfoText from "@/src/components/InfoText";
import { Fonts } from "@/src/constants/fonts";
import { HeroLogo, Logo } from "@/src/constants/images";
import { router } from "expo-router";
import { ImageBackground, Text, View } from "react-native";
import { Colors } from "../constants/themes";

function TextField() {
  return (
    <View style={{ alignItems: "center", gap: 18, marginTop: 24 }}>
      <Text style={{ fontSize: 30, fontFamily: Fonts.bold }}>
        We are what we do
      </Text>
      <Text
        style={{
          color: Colors.gray,
          textAlign: "center",
          fontSize: 16,
          lineHeight: 30,
          fontFamily: Fonts.thin,
        }}
      >
        Thousands of people are using silent moon for small meditation
      </Text>
    </View>
  );
}

export default function LoginIndex() {
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={require("@/assets/images/Frame.png")}
        style={{
          alignItems: "center",
          width: "100%",
          paddingTop: 62,
          paddingBottom: 100,
          backgroundColor: "#FFF",
        }}
      >
        <Logo />

        <View style={{ marginTop: 100 }}>
          <HeroLogo />
        </View>
      </ImageBackground>

      <ContainerView addSafeArea={false}>
        <TextField />

        <View
          style={{
            marginTop: 64,
            width: "100%",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Btn
            text="SIGN UP"
            txtColor={Colors.milk}
            onPress={() => router.navigate("/auth/signup")}
          />
          <InfoText
            instruction="LOG IN"
            color={Colors.primary}
            href="/auth/signin"
          />
        </View>
      </ContainerView>
    </>
  );
}
