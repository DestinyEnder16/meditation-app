import React from 'react';
import { Text, View } from 'react-native';
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
        {
          backgroundColor: bgColor,
          borderRadius: 10,
          paddingBottom: 10,
          gap: 15,
          overflow: 'hidden',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        },
      ]}
    >
      {Icon && (
        <View style={{ alignSelf: 'center' }}>
          <Icon height={type === 'small' ? 85 : 122} />
        </View>
      )}
      <Text
        style={[
          wrapTxt && { width: 120, lineHeight: 20 },
          {
            color: txtColor,
            fontSize: 16,
            fontFamily: Fonts.medium,
            textAlign: 'left',
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

export default Card;
