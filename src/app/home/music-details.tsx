import MusicPlayer from '@/src/components/MusicPlayer';
import NavStrip from '@/src/components/NavStrip';
import { XIcon } from '@/src/constants/images';
import { useLocalSearchParams } from 'expo-router';
import { ImageBackground, View } from 'react-native';

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
          paddingBottom: 200,
        }}
      >
        <NavStrip icon={XIcon} color="#B6B8BF" />

        <MusicPlayer
          title={title ? String(title) : 'Hey World'}
          subtitle="7 DAYS OF CALM"
        />
      </View>
    </ImageBackground>
  );
}
