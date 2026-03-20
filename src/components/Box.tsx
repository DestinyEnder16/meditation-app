import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../constants/fonts';
import { FacebookIcon, GoogleIcon } from '../constants/images';
import Btn from './ActionBtn';

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontFamily: Fonts.bold,
    textAlign: 'center',
  },
  container: { width: '100%', marginTop: 30, gap: 15 },
  txt: {
    marginVertical: 30,
    fontFamily: Fonts.medium,
    color: '#aaa',
  },
});

interface boxProps {
  heading: string;
}

export default function Box({ heading }: boxProps) {
  return (
    <>
      <Text style={styles.h1}>{heading}</Text>

      <View style={styles.container}>
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

      <Text style={styles.txt}>OR LOG IN WITH EMAIL</Text>
    </>
  );
}
