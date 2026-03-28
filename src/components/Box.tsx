import { router } from "expo-router";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Fonts } from "../constants/fonts";
import { BackBtn, FacebookIcon, GoogleIcon } from "../constants/images";
import { Colors } from "../constants/themes";
import Btn from "./ActionBtn";

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontFamily: Fonts.bold,
    textAlign: "center",
  },
  container: { width: "100%", paddingTop: 30, gap: 15, paddingHorizontal: 25 },
  txt: {
    marginVertical: 30,
    fontFamily: Fonts.medium,
    color: "#aaa",
    textAlign: "center",
  },
  btn: {
    borderRadius: 1000,
    borderWidth: 1,
    alignContent: "center",
    padding: 10,
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  background: {
    width: "100%",
    backgroundColor: "white",
    paddingTop: 55,
    gap: 30,
  },
});

interface boxProps {
  heading: string;
}

export default function Box({ heading }: boxProps) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("@/assets/images/vector.png")}
      style={styles.background}
    >
      <Pressable style={styles.btn} onPress={() => router.back()}>
        <BackBtn />
      </Pressable>
      <View>
        <Text style={styles.h1}>{heading}</Text>

        <View style={styles.container}>
          <Btn
            isSecondary
            txtColor={Colors.white}
            text="CONTINUE WITH FACEBOOK"
            icon={<FacebookIcon />}
          />

          <Btn
            isSecondary
            txtColor={Colors.dark}
            text="CONTINUE WITH GOOGLE"
            icon={<GoogleIcon />}
            styles={{ backgroundColor: "#fff" }}
          />
        </View>

        <Text
          style={styles.txt}
          onPress={() => router.navigate("/auth/signin")}
        >
          OR LOG IN WITH EMAIL
        </Text>
      </View>
    </ImageBackground>
  );
}
