import React, { ReactNode } from 'react';
import { View } from 'react-native';

type viewProps = {
  children: ReactNode;
};

export default function ContainerView({ children }: viewProps) {
  return (
    <View
      style={{
        alignItems: 'center',
        // paddingTop: 36,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      {children}
    </View>
  );
}
