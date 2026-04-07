import { Fonts } from '@/src/constants/fonts';
import {
  DarkThemeForwardBtn,
  DarkThemePauseBtn,
  DarkThemeProgressBar,
  DarkThemeRewindBtn,
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
  useDarkTheme?: boolean;
}

export default function MusicPlayer({
  title,
  subtitle,
  useDarkTheme = false,
}: MusicPlayerProps) {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={{ gap: 10, alignItems: 'center' }}>
      <Text style={[styles.header, useDarkTheme && { color: Colors.white }]}>
        {title}
      </Text>
      <Text style={styles.desc}>{subtitle}</Text>

      <View style={{ gap: 50 }}>
        <View style={styles.musicPlayer}>
          {!useDarkTheme ? (
            <>
              <RewindBtn />
              <Pressable>{isActive && <PauseBtn />}</Pressable>
              <ForwardBtn />
            </>
          ) : (
            <>
              <DarkThemeRewindBtn />
              <Pressable>{isActive && <DarkThemePauseBtn />}</Pressable>
              <DarkThemeForwardBtn />
            </>
          )}
        </View>

        <View style={{ gap: 10, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {!useDarkTheme ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Line1 />
                <Ellipse />
                <Line2 />
              </View>
            ) : (
              <>
                <DarkThemeProgressBar />
              </>
            )}
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={[styles.txt, useDarkTheme && { color: Colors.milk }]}>
              01:30
            </Text>
            <Text style={[styles.txt, useDarkTheme && { color: Colors.milk }]}>
              45:00
            </Text>
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
