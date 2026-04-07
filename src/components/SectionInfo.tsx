import { Fonts } from '@/src/constants/fonts';
import { Colors } from '@/src/constants/themes';
import { StyleSheet, Text, View } from 'react-native';

type SectionInfoProps = {
  header: string;
  info: string;
  description: string;
  headerColor?: string;
  infoColor?: string;
  descriptionColor?: string;
};

export default function SectionInfo({
  header,
  info,
  description,
  headerColor = Colors.dark,
  infoColor = Colors.gray,
  descriptionColor = Colors.gray,
}: SectionInfoProps) {
  return (
    <View style={{ gap: 15 }}>
      <Text style={[styles.header, { color: headerColor }]}>{header}</Text>
      <Text style={[styles.info, { color: infoColor }]}>{info}</Text>
      <Text style={[styles.description, { color: descriptionColor }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    fontFamily: Fonts.bold,
  },
  info: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.thin,
    lineHeight: 24,
    width: 315,
  },
});
