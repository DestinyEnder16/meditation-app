import Btn from '@/src/components/Btn';
import ContainerView from '@/src/components/ContainerView';
import InfoText from '@/src/components/InfoText';
import { HeroLogo, Logo } from '@/src/constants/images';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function TextField() {
  return (
    <View style={{ alignItems: 'center', gap: 18, marginTop: 24 }}>
      <Text style={{ fontSize: 30, fontWeight: 700 }}>We are what we do</Text>
      <Text
        style={{
          color: '#aaa',
          textAlign: 'center',
          fontSize: 16,
          lineHeight: 30,
        }}
      >
        Thousands of people are using silent moon for small meditation
      </Text>
    </View>
  );
}

export default function LoginIndex() {
  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="stretch"
        source={require('@/assets/images/Frame.png')}
        style={{
          alignItems: 'center',
          width: '100%',
          paddingTop: 32,
          paddingBottom: 140,
          backgroundColor: '#FFF',
        }}
      >
        <Logo />

        <View style={{ marginTop: 48 }}>
          <HeroLogo />
        </View>
      </ImageBackground>

      <ContainerView>
        <TextField />

        <View
          style={{
            marginTop: 64,
            width: '100%',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Btn
            text="SIGN UP"
            styles={{ backgroundColor: '#8E97FD', txtColor: '#F6F1FB' }}
          />
          <InfoText instruction="LOG IN" color="#8e97fd" />
        </View>
      </ContainerView>
    </SafeAreaView>
  );
}
