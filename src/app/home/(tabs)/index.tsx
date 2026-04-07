import CourseCard from '@/src/components/CourseCard';
import PracticeCard from '@/src/components/PracticeCard';
import RecommendationCard from '@/src/components/RecommendationCard';
import { Fonts } from '@/src/constants/fonts';
import { Colors } from '@/src/constants/themes';
import { useUser } from '@/src/contexts/userContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ContainerView from '../../../components/ContainerView';
import Header from '../../../components/Header';
import {
  BasicsCourse,
  FocusIcon,
  HappinessMeditatingIcon,
  Logo,
  RelaxationCourse,
} from '../../../constants/images';

export default function Home() {
  const hour = new Date().getHours();
  const { name } = useUser();
  const greeting = hour < 12 ? 'Morning' : hour < 18 ? 'Afternoon' : 'Evening';
  return (
    <ContainerView addSafeArea>
      <View style={{ marginTop: 10 }}>
        <Logo />
      </View>

      <View style={styles.headerContainer}>
        <Header
          header={`Good ${greeting}, ${name}`}
          info="We wish you have a good day"
        />
      </View>

      <View style={styles.coursesSection}>
        <View style={styles.courseCardsRow}>
          <CourseCard
            title="Basics"
            description="COURSE"
            image={BasicsCourse}
            duration="3-10 MIN"
            bgColor={Colors.primary}
            txtColor={Colors.yellow}
            detailsColor={Colors.milk}
          />
          <CourseCard
            title="Relaxation"
            description="MUSIC"
            image={RelaxationCourse}
            duration="3-10 MIN"
            bgColor={'#FFC97E'}
            txtColor={Colors.dark}
            detailsColor="#524F53"
            useDarkBtn
          />
        </View>

        <View>
          <PracticeCard
            title="Daily Thought"
            info1="Meditation"
            info2="3 - 10 MIN"
            backgroundImg={require('@/assets/images/practice_course1_background.png')}
            backgroundColor={Colors.dark}
            titleColor="#fff"
            infoColor={Colors.milk}
          />
        </View>
      </View>

      <Text style={styles.header}>Recommended For You</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.courseCardsRow}
      >
        <RecommendationCard
          icon={<FocusIcon />}
          title="Focus"
          description="MEDITATION"
          backgroundColor="#A8D8C8"
          duration="3 - 10 MIN"
        />
        <RecommendationCard
          icon={<HappinessMeditatingIcon />}
          title="Happiness"
          description="MEDITATION"
          duration="3 - 10 MIN"
        />
        <RecommendationCard
          icon={<FocusIcon />}
          title="Focus"
          description="MEDITATION"
          duration="3 - 10 MIN"
          backgroundColor="#A8D8C8"
        />
      </ScrollView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  coursesSection: {
    gap: 20,
    marginTop: 30,
  },
  courseCardsRow: {
    flexDirection: 'row',
    gap: 20,
  },
  header: {
    fontSize: 24,
    alignSelf: 'flex-start',
    marginTop: 35,
    marginBottom: 20,
    fontFamily: Fonts.medium,
    color: Colors.dark,
  },
});
