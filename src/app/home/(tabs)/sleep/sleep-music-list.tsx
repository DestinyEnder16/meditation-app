import ContainerView from '@/src/components/ContainerView';
import MusicCard from '@/src/components/SleepMusicCard';
import { sleepMusicData } from '@/src/constants/data';
import { Fonts } from '@/src/constants/fonts';
import { BackBtn } from '@/src/constants/images';
import { Colors } from '@/src/constants/themes';
import { router, Tabs } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.headerRow}>
      <Pressable style={styles.btn} onPress={() => router.back()}>
        <BackBtn />
      </Pressable>

      <Text style={styles.txt}>Sleep Music</Text>

      <View></View>
    </View>
  );
}

export default function SleepMusicList() {
  return (
    <>
      <View style={styles.screenContainer}>
        <ContainerView addSafeArea transparent>
          <Tabs.Screen
            options={{
              tabBarStyle: {
                height: 90,
                backgroundColor: Colors.sleepPrimaryTheme,
                borderColor: Colors.sleepPrimaryTheme,
              },
              tabBarActiveTintColor: Colors.white,
            }}
          />
          <View>
            <Header />

            <FlatList
              contentContainerStyle={[
                { gap: 10, paddingBottom: 50, marginTop: 40 },
              ]}
              numColumns={2}
              columnWrapperStyle={{ gap: 20, marginTop: 10 }}
              data={sleepMusicData}
              renderItem={({ item }) => (
                <MusicCard
                  image={item.image}
                  title={item.title}
                  duration={item.duration}
                  type={item.type}
                  id={item.index}
                />
              )}
              keyExtractor={(item) => String(item.index)}
            />
          </View>
        </ContainerView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: Colors.sleepPrimaryTheme,
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  txt: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.white,
  },
  btn: {
    padding: 14,
    backgroundColor: Colors.white,
    borderRadius: 24,
  },
});
