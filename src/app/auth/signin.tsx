import AppKeyboardScrollView from '@/src/components/AppKeyboardScrollView';
import Box from '@/src/components/Box';
import ContainerView from '@/src/components/ContainerView';
import RegistrationForm from '@/src/components/Form';
import InfoText from '@/src/components/InfoText';
import { Colors } from '@/src/constants/themes';
import { View } from 'react-native';

export default function Login() {
  return (
    <AppKeyboardScrollView>
      <View style={{ flex: 1 }}>
        <Box heading="Welcome Back!" />
        <ContainerView addSafeArea={false}>
          <RegistrationForm type="login" />

          <View style={{ marginTop: 30 }}>
            <InfoText
              color={Colors.primary}
              instruction="SIGN UP"
              href="/auth/signup"
            />
          </View>
        </ContainerView>
      </View>
    </AppKeyboardScrollView>
  );
}
