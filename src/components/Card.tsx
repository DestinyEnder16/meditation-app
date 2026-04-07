import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../constants/fonts';
import { Colors } from '../constants/themes';

interface IconProps {
  width?: number;
  height?: number;
}

interface cardProps {
  icon?: React.ComponentType<IconProps>;
  text: string;
  type?: string;
  bgColor: string;
  txtColor?: string;
  wrapTxt?: boolean;

  // data:
}

function Card({
  icon: Icon,
  text,
  type = 'small',
  bgColor,
  txtColor = Colors.dark,
  wrapTxt = false,
}: cardProps) {
  return (
    <View
      style={[
        type === 'small' ? { height: 167 } : { height: 210 },
        styles.card,
        { backgroundColor: bgColor },
      ]}
    >
      {Icon && (
        <View style={{ alignSelf: 'center' }}>
          <Icon height={type === 'small' ? 85 : 122} />
        </View>
      )}
      <Text
        style={[
          wrapTxt && styles.wrappedText,
          styles.cardText,
          { color: txtColor },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingBottom: 10,
    gap: 15,
    overflow: 'hidden',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    textAlign: 'left',
  },
  wrappedText: {
    width: 120,
    lineHeight: 20,
  },
});

export default Card;
