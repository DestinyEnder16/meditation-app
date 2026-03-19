import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type viewProps = {
  children: ReactNode;
  addSafeArea?: boolean;
};

export default function ContainerView({
  addSafeArea = false,
  children,
}: viewProps) {
  return addSafeArea ? (
    <SafeAreaView
      style={{
        alignItems: 'center',
        // paddingTop: 36,
        paddingHorizontal: 25,
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </SafeAreaView>
  ) : (
    <View
      style={{
        alignItems: 'center',
        // paddingTop: 36,
        paddingHorizontal: 25,
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </View>
  );
}
