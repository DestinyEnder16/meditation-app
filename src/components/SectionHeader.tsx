import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';
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
      style={styles.background}
    >
      <NavStrip icon={BackBtn} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 289,
    position: 'relative',
  },
});
