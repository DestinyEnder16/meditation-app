import { Pressable, Text } from 'react-native';

type btnProps = {
  text: string;
  styles?: { backgroundColor: string; txtColor: string };
};

export default function Btn({ text, styles }: btnProps) {
  return (
    <Pressable
      style={[
        styles
          ? { backgroundColor: styles.backgroundColor }
          : { backgroundColor: 'black' },
        {
          borderRadius: 38,
          paddingVertical: 20,
          width: '100%',
          alignItems: 'center',
        },
      ]}
    >
      <Text
        style={[
          styles ? { color: styles.txtColor } : { color: 'white' },
          { fontSize: 14, fontWeight: 400 },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}
