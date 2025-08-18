import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Aether", id: "1" },
    { name: "Lumine", id: "2" },
    { name: "Diluc", id: "3" },
    { name: "Mona", id: "4" },
    { name: "Jean", id: "5" },
    { name: "Keqing", id: "6" },
    { name: "Qiqi", id: "7" },
    { name: "Tighnari", id: "8" },
    { name: "Dehya", id: "9" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id} //Called first before numColumns, or else it'll cause an error
        numColumns={2}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        );
      })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0ff",
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: "center",
    //justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
