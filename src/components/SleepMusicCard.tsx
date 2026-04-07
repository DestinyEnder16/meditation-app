import { router } from 'expo-router';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fonts } from '../constants/fonts';
import { Colors } from '../constants/themes';

interface cardProps {
  // icon: React.ComponentType;
  image: ImageSourcePropType;
  title: string;
  duration: string;
  type: string;
  id: number;
}

export default function MusicCard({
  title,
  id,
  image,
  type,
  duration,
}: cardProps) {
  function handlePress() {
    router.navigate({
      pathname: '/home/sleep-music-details',
      params: {
        title,
        duration,
        info: type,
        activeTab: id,
      },
    });
  }
  return (
    <Pressable onPress={() => handlePress()}>
      {/* <Icon /> */}
      <View>
        <Image source={image} style={styles.image} />
      </View>

      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoRow}>
          <Text style={styles.info}>{duration}</Text>
          <Text style={styles.info}>•</Text>
          <Text style={styles.info}>{type}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.milk,
  },
  info: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    color: '#98A1BD',
  },
  image: {
    height: 123,
    width: 177,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
