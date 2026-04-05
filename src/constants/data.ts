import {
  AnxietyLogo,
  GrowthLogo,
  HappinessLogo,
  PerformanceLogo,
  SleepLogo,
  StressIcon,
  StudyCard,
} from "./images";
import { Colors } from "./themes";

export const topicData = [
  {
    icon: StressIcon,
    bgColor: Colors.primary,
    text: "Reduce Stress",
    type: "big",
    txtColor: Colors.yellow,
    id: 1,
  },
  {
    icon: PerformanceLogo,
    bgColor: Colors.tomato,
    text: "Improve Performance",
    txtColor: "#FEF9F3",
    id: 2,
    wrapTxt: true,
  },
  {
    icon: HappinessLogo,
    bgColor: Colors.orange,
    text: "Increase Happiness",
    txtColor: Colors.dark,
    wrapTxt: true,
    id: 3,
  },
  {
    icon: AnxietyLogo,
    bgColor: Colors.lemon,
    text: "Reduce Anxiety",
    type: "big",
    id: 4,
  },
  {
    icon: GrowthLogo,
    bgColor: Colors.green,
    text: "Personal Growth",
    type: "big",
    txtColor: Colors.yellow,
    wrapTxt: true,
    id: 5,
  },

  {
    icon: SleepLogo,
    bgColor: Colors.dark,
    text: "Better Sleep",
    txtColor: Colors.milk,
    id: 6,
  },
  {
    icon: StressIcon,
    bgColor: Colors.primary,
    text: "Focus More",
    txtColor: Colors.yellow,
    id: 7,
  },
  {
    icon: StudyCard,
    bgColor: Colors.pink,
    text: "Improve Productivity",
    txtColor: Colors.dark,
    type: "big",
    wrapTxt: true,
    id: 8,
  },
];

export const narratorData = [
  [
    {
      name: "Focus Attention",
      duration: "10 MIN",
    },
    {
      name: "Body Scan",
      duration: "5 MIN",
    },
    {
      name: "Making Happiness",
      duration: "3 MIN",
    },
  ],
  [
    {
      name: "Focus Attention",
      duration: "15 MIN",
    },
    {
      name: "Body Scan",
      duration: "10 MIN",
    },
    {
      name: "Making Happiness",
      duration: "13 MIN",
    },
  ],
];
