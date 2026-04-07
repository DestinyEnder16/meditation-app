import FilterCategoryTabs from '@/src/components/FilterCategoryTabs';
import Header from '@/src/components/Header';
import MusicList from '@/src/components/SleepMusicList';
import { SleepOverViewCard } from '@/src/constants/images';
import { Colors } from '@/src/constants/themes';
import { useScreenInfo } from '@/src/contexts/screenContext';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native';

function SleepHeader() {
  return (
    <>
      <ImageBackground
        source={require('@/assets/images/sleep-background.png')}
        resizeMode="cover"
        style={styles.headerBackground}
      >
        <View style={{ marginTop: 30 }}>
          <Header
            alignCenter
            header="Sleep Stories"
            info="Soothing bedtime stories to help you fall
          into a deep and natural sleep"
            headerColor="#E6E7F2"
            infoColor={Colors.milk}
          />
        </View>
        <FilterCategoryTabs bgColor="#586894" activeTxtColor={Colors.white} />
      </ImageBackground>

      <Pressable
        style={styles.overviewCard}
        onPress={() => router.navigate('/home/(tabs)/sleep/sleep-music-list')}
      >
        <SleepOverViewCard />
      </Pressable>
    </>
  );
}

export default function Sleep() {
  const { isWelcomed } = useScreenInfo();
  return isWelcomed ? (
    <>
      <StatusBar style="light" />

      <MusicList
        ListHeaderComponent={<SleepHeader />}
        style={{ backgroundColor: Colors.sleepPrimaryTheme }}
      />
    </>
  ) : (
    <Redirect href={{ pathname: '/home/sleep-welcome' }} />
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    paddingTop: 40,
    gap: 40,
  },
  overviewCard: {
    alignItems: 'center',
    marginVertical: 30,
  },
});
