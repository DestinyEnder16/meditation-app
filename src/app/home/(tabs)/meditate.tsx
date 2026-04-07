import ContainerView from '@/src/components/ContainerView';
import FilterCategoryTabs from '@/src/components/FilterCategoryTabs';
import Header from '@/src/components/Header';
import FeatureCard from '@/src/components/MeditateFeatureCard';
import PracticeCard from '@/src/components/PracticeCard';
import {
  MeditateFeature1,
  MeditateFeature2,
  MeditateFeature3,
  MeditateFeature4,
} from '@/src/constants/images';
import { Colors } from '@/src/constants/themes';
import { ScrollView, View } from 'react-native';

export default function Meditate() {
  return (
    <ContainerView addSafeArea usePadding={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 40 }}
      >
        <View style={{ paddingHorizontal: 25 }}>
          <Header
            alignCenter
            header="Meditate"
            infoFontSize={16}
            info="We can learn how to recognize when our minds are doing their normal everyday acrobatics."
          />
        </View>

        <View style={{ marginTop: 35 }}>
          <FilterCategoryTabs />
        </View>

        <View style={{ paddingHorizontal: 25 }}>
          <View style={{ marginTop: 30 }}>
            <PracticeCard
              title="Daily Calm"
              info1="Apr 30"
              info2="PAUSE PRACTICE"
              backgroundImg={require('@/assets/images/practice_course2_background.png')}
              backgroundColor="#FAE8D0"
              useDarkBtn
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              gap: 15,
              marginTop: 30,
              marginBottom: 100,
              flexGrow: 1,
            }}
          >
            <View style={{ gap: 25 }}>
              <FeatureCard text="7 Days of Calm" icon={<MeditateFeature1 />} />

              <FeatureCard
                text="Still Waters"
                txtColor={Colors.milk}
                icon={<MeditateFeature3 />}
              />
            </View>

            <View style={{ gap: 25 }}>
              <FeatureCard text="Anxiety Release" icon={<MeditateFeature2 />} />
              <FeatureCard
                text="Natural Springs"
                txtColor={Colors.dark}
                icon={<MeditateFeature4 />}
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ContainerView>
  );
}
