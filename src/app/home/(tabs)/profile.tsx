import ContainerView from '@/src/components/ContainerView';
import { Text, View } from 'react-native';

export default function Profile() {
  return (
    <ContainerView addSafeArea>
      <View>
        <Text>Hello World</Text>
      </View>
    </ContainerView>
  );
}
