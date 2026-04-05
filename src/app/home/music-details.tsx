import NavStrip from '@/src/components/NavStrip';
import { Fonts } from '@/src/constants/fonts';
import { ForwardBtn, PauseBtn, RewindBtn, XIcon } from '@/src/constants/images';
import { Colors } from '@/src/constants/themes';
import { useLocalSearchParams } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function MusicDetails() {
  const { title } = useLocalSearchParams();

  return (
    <ImageBackground source={require('@/assets/images/music-background.png')}>
      <View
        style={{
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: '#faf7f281',
          paddingBottom: 250,
        }}
      >
        <NavStrip icon={XIcon} color="#B6B8BF" />

        <View style={{ gap: 10, alignItems: 'center' }}>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.desc}>7 DAYS OF CALM</Text>
        </View>

        <View style={{ gap: 50 }}>
          <View style={styles.musicPlayer}>
            <RewindBtn />
            <PauseBtn />
            <ForwardBtn />
          </View>

          <View style={{ gap: 10 }}>
            <View
              style={{ height: 1, width: '100%', backgroundColor: '#A0A3B1' }}
            />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={styles.txt}>01:30</Text>
              <Text style={styles.txt}>45:00</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: Fonts.bold,
    fontSize: 34,
  },
  txt: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.dark,
  },
  desc: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: '#A0A3B1',
  },
  musicPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginTop: 60,
  },
});
