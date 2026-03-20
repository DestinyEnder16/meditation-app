import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

interface appProps {
  children: React.ReactNode;
}

export default function AppKeyboardScrollView({ children }: appProps) {
  return (
    <KeyboardAwareScrollView
      bottomOffset={30}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ width: '100%' }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}
