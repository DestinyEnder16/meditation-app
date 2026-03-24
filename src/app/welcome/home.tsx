import ContainerView from '@/src/components/ContainerView';
import { Fonts } from '@/src/constants/fonts';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <ContainerView addSafeArea>
      <View style={{ alignSelf: 'flex-start' }}>
        <Text style={{ fontFamily: Fonts.medium, fontSize: 28 }}>
          What Brings you
        </Text>
        <Text style={{ fontFamily: Fonts.thin, fontSize: 28 }}>
          to Silent Moon
        </Text>
      </View>
    </ContainerView>
  );
}
