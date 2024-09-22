import { FlatList, StyleSheet, View, Text } from "react-native";
import SimpleEventPreview from "../SimpleEventPreview";
import { TEvent } from "@/@types/dataTypes";
import { string } from "zod";

type SimpleEventListProps = {
  title: string;
  eventsData: TEvent[],
  category: string
}



export default function SimpleEventList({ title, eventsData, category }: SimpleEventListProps) {


  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={eventsData.filter((event) => event.theme === category)}
        renderItem={({ item }) => (
          <SimpleEventPreview imageUrl={item.photo} title={item.name} id={item._id} />
        )}
        keyExtractor={(item) => item._id}
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
