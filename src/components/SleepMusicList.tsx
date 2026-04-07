import { FlatList, StyleSheet, ViewStyle } from 'react-native';
import { sleepMusicData } from '../constants/data';
import MusicCard from './SleepMusicCard';

interface MusicListProps {
  ListHeaderComponent?: React.ReactElement;
  ListFooterComponent?: React.ReactElement;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  data?: any[];
}

export default function MusicList({
  ListHeaderComponent,
  style,
  contentContainerStyle,
  ListFooterComponent,
  data,
}: MusicListProps) {
  return (
    <FlatList
      data={data ? data : sleepMusicData}
      style={[style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      keyExtractor={(item) => String(item.index)}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListFooterComponentStyle={ListFooterComponent && styles.footer}
      renderItem={({ item, index }) => (
        <MusicCard
          image={item.image}
          title={item.title}
          duration={item.duration}
          type={item.type}
          id={item.index}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
    paddingBottom: 50,
  },
  columnWrapper: {
    gap: 15,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: 25,
    position: 'fixed' as any,
    marginTop: 10,
    bottom: 0,
  },
});
