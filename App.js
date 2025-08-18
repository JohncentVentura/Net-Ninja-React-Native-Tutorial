import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Aether", key: "1" },
    { name: "Lumine", key: "2" },
    { name: "Diluc", key: "3" },
    { name: "Mona", key: "4" },
    { name: "Jean", key: "5" },
    { name: "Keqing", key: "6" },
    { name: "Qiqi", key: "7" },
    { name: "Tighnari", key: "8" },
    { name: "Dehya", key: "9" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        );
      })}
      </ScrollView>
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
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  }
});
