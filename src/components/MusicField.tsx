import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../constants/fonts';
import { PurplePlayBtn, WhitePlayBtn } from '../constants/images';
import { Colors } from '../constants/themes';

interface MusicFieldProps {
  title: string;
  duration: string;
  activeSong: number;
  index: number;
  setActiveIndex: (index: number) => void;
}

export default function MusicField({
  title,
  duration,
  activeSong,
  index,
  setActiveIndex,
}: MusicFieldProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        setActiveIndex(index);
        router.navigate({
          pathname: '/home/music-details',
          params: { title },
        });
      }}
    >
      {activeSong === index ? <PurplePlayBtn /> : <WhitePlayBtn />}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  title: {
    color: Colors.dark,
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  duration: {
    color: Colors.gray,
    fontFamily: Fonts.medium,
    fontSize: 11,
  },
});
