import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/header";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Enter the dungeon", key: "1" },
    { text: "Mine ores", key: "2" },
    { text: "Slay monsters", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to from */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0ff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});