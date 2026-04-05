import { Fonts } from '@/src/constants/fonts';
import {
  Ellipse,
  ForwardBtn,
  Line1,
  Line2,
  PauseBtn,
  RewindBtn,
} from '@/src/constants/images';
import { Colors } from '@/src/constants/themes';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface MusicPlayerProps {
  title: string;
  subtitle: string;
}

export default function MusicPlayer({ title, subtitle }: MusicPlayerProps) {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={{ gap: 10, alignItems: 'center' }}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.desc}>{subtitle}</Text>

      <View style={{ gap: 50 }}>
        <View style={styles.musicPlayer}>
          <RewindBtn />
          <Pressable>{isActive && <PauseBtn />}</Pressable>
          <ForwardBtn />
        </View>

        <View style={{ gap: 10, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Line1 />
            <Ellipse />
            <Line2 />
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.txt}>01:30</Text>
            <Text style={styles.txt}>45:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: 34,
  },
  desc: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#A0A3B1',
  },
  txt: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.dark,
  },
  musicPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginTop: 60,
    alignSelf: 'center',
  },
});
