import { FlatList, StyleSheet, View, Text } from "react-native";
import SimpleEventPreview from "../SimpleEventPreview";

type SimpleEventListProps = {
  title: string;
}

export default function SimpleEventList({ title }: SimpleEventListProps) {
  const eventData = [
    { id: '1', title: 'Evento 1', imageUrl: require('@/assets/images/ifpb_logo.jpeg') },
    { id: '2', title: 'Evento 2', imageUrl: require('@/assets/images/ifpb_logo.jpeg') },
    { id: '3', title: 'Evento 3', imageUrl: require('@/assets/images/ifpb_logo.jpeg') },
    { id: '4', title: 'Evento 4', imageUrl: require('@/assets/images/ifpb_logo.jpeg') },
  ];

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={eventData}
        renderItem={({ item }) => (
          <SimpleEventPreview imageUrl={item.imageUrl} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 5,
    gap: 21,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    margin: 5,
  },
});
