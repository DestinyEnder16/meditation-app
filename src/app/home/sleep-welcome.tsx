import Btn from '@/src/components/ActionBtn';
import { Fonts } from '@/src/constants/fonts';
import { Colors } from '@/src/constants/themes';
import { useScreenInfo } from '@/src/contexts/screenContext';
import { router } from 'expo-router';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Welcome() {
  const { setIsWelcomed } = useScreenInfo();
  return (
    <>
      {/* NOTE: This sets the status bar to a light theme */}
      <StatusBar barStyle={'light-content'} />
      <ImageBackground
        source={require('@/assets/images/sleep-background-v1.png')}
        style={{ backgroundColor: Colors.sleepPrimaryTheme }}
      >
        <View style={styles.container}>
          <View style={styles.textSection}>
            <Text style={styles.header}>Welcome to Sleep</Text>
            <Text style={styles.info}>
              Explore the new king of sleep. It uses sound and visualization to
              create perfect conditions for refreshing sleep.
            </Text>
          </View>
          <Btn
            text="GET STARTED"
            txtColor="#F6F1FB"
            onPress={() => {
              setIsWelcomed(true);
              router.replace('/home/(tabs)/sleep');
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingTop: 180,
    paddingHorizontal: 25,
  },
  textSection: {
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 25,
  },
  header: {
    color: '#E6E7F2',
    fontFamily: Fonts.bold,
    fontSize: 30,
  },
  info: {
    color: Colors.milk,
    fontFamily: Fonts.thin,
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
});
