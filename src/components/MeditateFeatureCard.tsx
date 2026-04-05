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
    <View
      style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}
    >
      {icon}
      <BlurView
        intensity={40}
        tint="dark"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 12,
        }}
      >
        <Text style={[styles.txt, { color: txtColor }]}>{text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: Fonts.bold,
    fontSize: 18,
  },
});
