import MusicPlayer from '@/src/components/MusicPlayer';
import NavStrip from '@/src/components/NavStrip';
import { XIcon } from '@/src/constants/images';
import { useLocalSearchParams } from 'expo-router';
import { ImageBackground, View } from 'react-native';

export default function MusicDetails() {
  const { title, useDark } = useLocalSearchParams();

  return (
    <ImageBackground
      source={
        useDark === 'yes'
          ? require('@/assets/images/dark-music-background.png')
          : require('@/assets/images/music-background.png')
      }
      resizeMode="cover"
    >
      <View
        style={[
          {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 200,
          },
          useDark === 'yes' && { backgroundColor: '#03164ced' },
        ]}
      >
        <NavStrip
          icon={XIcon}
          color={useDark === 'yes' ? '#03164ced' : '#B6B8BF'}
        />

        <MusicPlayer
          title={title ? String(title) : 'Hey World'}
          useDarkTheme={useDark === 'yes'}
          subtitle="SLEEP MUSIC"
        />
      </View>
    </ImageBackground>
  );
}
