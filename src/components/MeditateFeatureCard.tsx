import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../constants/fonts';
import { Colors } from '../constants/themes';

interface cardProps {
  text: string;
  icon?: React.ReactNode;
  txtColor?: string;
}

export default function FeatureCard({
  text,
  icon,
  txtColor = Colors.white,
}: cardProps) {
  return (
    <View style={styles.container}>
      {icon}
      <BlurView
        intensity={40}
        tint="dark"
        style={styles.blurOverlay}
      >
        <Text style={[styles.txt, { color: txtColor }]}>{text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
  },
  blurOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  txt: {
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
});
