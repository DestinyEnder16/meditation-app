import React, { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type viewProps = {
  children: ReactNode;
  addSafeArea?: boolean;
  transparent?: boolean;
  usePadding?: boolean;
};

export default function ContainerView({
  addSafeArea = false,
  transparent = false,
  usePadding = true,
  children,
}: viewProps) {
  const bg = transparent ? "transparent" : "#fff";

  return addSafeArea ? (
    <SafeAreaView
      style={[
        usePadding && { paddingHorizontal: 25 },
        {
          alignItems: "center",
          flex: 1,
          backgroundColor: bg,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  ) : (
    <View
      style={[
        usePadding && { paddingHorizontal: 25 },
        {
          alignItems: "center",
          flex: 1,
          backgroundColor: bg,
        },
      ]}
    >
      {children}
    </View>
  );
}
