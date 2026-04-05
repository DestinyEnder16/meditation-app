import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Fonts } from '../constants/fonts';
import { StartBtnDark, StartBtnWhite } from '../constants/images';

interface IconProps {
  width?: number;
  height?: number;
}

interface CourseCardProps {
  title: string;
  description: string;
  image: React.ComponentType<IconProps>;
  duration: string;
  bgColor: string;
  txtColor?: string;
  detailsColor?: string;
  useDarkBtn?: boolean;
}

export default function CourseCard({
  title,
  description,
  image: Image,
  duration,
  bgColor,
  txtColor,
  detailsColor,
  useDarkBtn = false,
}: CourseCardProps) {
  const router = useRouter();

  return (
    <View
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        width: 177,
        height: 210,
        justifyContent: 'space-between',
      }}
    >
      <View>
        <View style={{ alignSelf: 'flex-end' }}>
          <Image />
        </View>

        <View style={{ paddingHorizontal: 12, gap: 30 }}>
          <View>
            <Text style={[styles.title, txtColor && { color: txtColor }]}>
              {title}
            </Text>
            <Text style={[styles.desc, txtColor && { color: txtColor }]}>
              {description}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text
              style={[styles.details, detailsColor && { color: detailsColor }]}
            >
              {duration}
            </Text>
            <Pressable onPress={() => router.push('/home/course-details')}>
              {useDarkBtn ? <StartBtnDark /> : <StartBtnWhite />}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  desc: {
    fontSize: 11,
    fontFamily: Fonts.medium,
  },
  details: {
    fontFamily: Fonts.medium,
    fontSize: 11,
  },
});
