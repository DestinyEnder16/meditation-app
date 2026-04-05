import { ImageBackground, ImageSourcePropType } from 'react-native';
import { BackBtn } from '../constants/images';
import NavStrip from './NavStrip';

type SectionHeaderProps = {
  headerBackground: ImageSourcePropType;
};

export default function SectionHeader({
  headerBackground,
}: SectionHeaderProps) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={headerBackground}
      style={{ width: '100%', height: 289, position: 'relative' }}
    >
      <NavStrip icon={BackBtn} />
    </ImageBackground>
  );
}
