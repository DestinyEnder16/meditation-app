import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { DownloadIcon, FavoriteIcon } from '../constants/images';

interface navProps {
  icon: React.ComponentType;
  color?: string;
}

export default function NavStrip({ icon: Icon, color }: navProps) {
  return (
    <View style={styles.strip}>
      <View>
        <Pressable style={styles.btn} onPress={() => router.back()}>
          <Icon />
        </Pressable>
      </View>

      <View style={{ flexDirection: 'row', gap: 17 }}>
        <View
          style={[styles.iconContainer, color && { backgroundColor: color }]}
        >
          <FavoriteIcon />
        </View>

        <View
          style={[styles.iconContainer, color && { backgroundColor: color }]}
        >
          <DownloadIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    position: 'absolute',
    top: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#03164c74',
    padding: 12,
    borderRadius: 38,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 1000,
    alignContent: 'center',
    padding: 15,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
});
