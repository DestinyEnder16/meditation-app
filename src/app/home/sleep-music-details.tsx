import Btn from '@/src/components/ActionBtn';
import MusicBar from '@/src/components/MusicBar';
import SectionHeader from '@/src/components/SectionHeader';
import SectionInfo from '@/src/components/SectionInfo';
import MusicList from '@/src/components/SleepMusicList';
import { sleepMusicData } from '@/src/constants/data';
import { Fonts } from '@/src/constants/fonts';
import { Colors } from '@/src/constants/themes';
import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SleepMusicDetails() {
  const { activeTab, title, duration, info } = useLocalSearchParams<{
    activeTab: string;
    title: string;
    duration: string;
    info: string;
  }>();

  const filteredData = sleepMusicData.filter(
    (data) => data.index !== +activeTab
  );

  const ListHeader = (
    <>
      <SectionHeader headerBackground={sleepMusicData[+activeTab]['image']} />
      <View style={{ justifyContent: 'center' }}>
        <View style={styles.content}>
          <SectionInfo
            header={title}
            info={`${duration} • ${info}`}
            infoColor="#98A1BD"
            description="Ease the mind into a restful night's sleep with these deep, ambient tones!"
            headerColor="#E6E7F2"
          />

          <MusicBar
            numFavorites={24234}
            numListening={34234}
            favoriteIconColor="#E6E7F2"
            headphoneIconColor="#E6E7F2"
            textColor={Colors.gray}
          />

          <View>
            <Text style={styles.txt}>Related</Text>
          </View>
        </View>
      </View>
    </>
  );
  return (
    <View style={styles.screenContainer}>
      <MusicList ListHeaderComponent={ListHeader} data={filteredData} />
      <View style={styles.playBtnContainer}>
        <Btn
          text="Play"
          txtColor={Colors.white}
          onPress={() =>
            router.navigate({
              pathname: '/home/music-details',
              params: {
                title,
                useDark: 'yes',
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#03174C',
    paddingBottom: 50,
  },
  content: {
    marginTop: 25,
    paddingHorizontal: 25,
  },
  playBtnContainer: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
  },
  txt: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.milk,
    marginTop: 50,
  },
});
