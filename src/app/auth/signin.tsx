import Box from '@/src/components/Box';
import ContainerView from '@/src/components/ContainerView';
import RegistrationForm from '@/src/components/Form';
import InfoText from '@/src/components/InfoText';
import { BackBtn } from '@/src/constants/images';
import { router } from 'expo-router';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require('@/assets/images/vector.png')}
        style={styles.background}
      >
        <Pressable style={styles.btn} onPress={() => router.back()}>
          <BackBtn />
        </Pressable>
      </ImageBackground>

      <ContainerView addSafeArea={true}>
        <Box heading="Welcome Back!" />

        <RegistrationForm type="login" />

        <View style={{ marginTop: 100 }}>
          <InfoText color="#8e97fd" instruction="SIGN UP" href="/auth/signup" />
        </View>
      </ContainerView>
    </View>
  );
}

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: 24,
  },
  btn: {
    borderRadius: 1000,
    borderWidth: 1,
    alignContent: 'center',
    padding: 10,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  background: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 55,
  },
});
