import AppKeyboardScrollView from '@/src/components/AppKeyboardScrollView';
import Box from '@/src/components/Box';
import ContainerView from '@/src/components/ContainerView';
import RegistrationForm from '@/src/components/Form';
import { View } from 'react-native';

export default function Signup() {
  return (
    <AppKeyboardScrollView>
      <View style={{ flex: 1 }}>
        <Box heading="Create your account" />
        <ContainerView addSafeArea={false}>
          <RegistrationForm type="signup" />
        </ContainerView>
      </View>
    </AppKeyboardScrollView>
  );
}
