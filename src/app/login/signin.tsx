import Btn from '@/src/components/ActionBtn';
import ContainerView from '@/src/components/ContainerView';
import { BackBtn, FacebookIcon, GoogleIcon } from '@/src/constants/images';
import { router } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Login() {
  return (
    <>
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
        <Text style={styles.h1}>Welcome Back!</Text>

        <View style={{ width: '100%', marginTop: 30, gap: 15 }}>
          <Btn
            isSecondary
            txtColor="#eee"
            text="CONTINUE WITH FACEBOOK"
            icon={<FacebookIcon />}
          />

          <Btn
            isSecondary
            txtColor="#333"
            text="CONTINUE WITH GOOGLE"
            icon={<GoogleIcon />}
            styles={{ backgroundColor: '#fff' }}
          />
        </View>

        <Text style={{ marginVertical: 30 }}>OR LOG IN WITH EMAIL</Text>
      </ContainerView>
    </>
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
    marginLeft: 10,
  },
  background: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 55,
  },
  h1: {
    fontSize: 28,
    fontWeight: 700,
    textAlign: 'center',
  },
});
