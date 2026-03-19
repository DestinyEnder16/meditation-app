import { router } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Fonts } from '../constants/fonts';

interface infoProps {
  instruction: string;
  color: string;
  href?: any;
}

export default function InfoText({ instruction, color, href }: infoProps) {
  return (
    <Text style={styles.txt}>
      ALREADY HAVE AN ACCOUNT?{'  '}
      <Text style={{ color }} onPress={() => href && router.navigate(href)}>
        {instruction}
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: Fonts.medium,
    color: '#aaa',
  },
});
