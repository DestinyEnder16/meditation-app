import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../constants/fonts';
import { Colors } from '../constants/themes';

type btnProps = {
  styles?: { backgroundColor: string };
  isSecondary?: boolean;
  icon?: React.ReactNode;
  text: string;
  txtColor?: string;
  onPress?: () => void;
};

const btnStyles = StyleSheet.create({
  actionBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  txt: {
    fontFamily: Fonts.medium,
  },
});

export default function Btn({
  text,
  txtColor,
  styles,
  icon,
  onPress,
  isSecondary = false,
}: btnProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles
          ? { backgroundColor: styles.backgroundColor }
          : {
              backgroundColor: isSecondary ? Colors.secondary : Colors.primary,
            },

        {
          borderRadius: 38,
          borderWidth: 0.3,
          paddingVertical: 20,
          width: '100%',
          alignItems: 'center',
        },
      ]}
    >
      {!icon ? (
        <Text style={[btnStyles.txt, txtColor && { color: txtColor }]}>
          {text}
        </Text>
      ) : (
        <View style={btnStyles.actionBtns}>
          {icon}
          <Text style={[btnStyles.txt, txtColor && { color: txtColor }]}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
