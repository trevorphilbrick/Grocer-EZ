import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Card, Input, Button, Header } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";

// COMPONENTS
import ListofItems from "./components/Items";
import { Pressable } from "react-native";

export default function App() {
  // Item name inputted into new item input
  const [item, setItem] = useState("");
  // Array of Items
  const [itemsList, setItemsList] = useState([]);
  // Category selector
  const [category, setCategory] = useState();

  // Combine setItem Function and setItemsList function to add object ot state and clear input text feild
  const SetItemResetText = () => {
    setItem(" ");
    setItemsList([...itemsList, { title: item, category: category }]);
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "#121212" }}>
      <Header
  backgroundColor={'#03dac6'}
  elevated
  centerComponent={{ text: 'Grocer-EZ', style: { color: '#fff' } }}
  
/>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <Card
          containerStyle={{
            backgroundColor: "rgba(255,255,255, 0.11)",
            borderWidth: 0,
            borderRadius: 5,
            elevation: 0,
          }}
        >
          <Card.Title style={{ color: "#bb86fc" }}>Add Item</Card.Title>
          <Card.Divider />

          <TextInput
            onChangeText={(value) => setItem(value)}
            style={{
              color: "#f1f1f1",
              borderWidth: 1,
              borderColor: "#111111",
              backgroundColor: "#111111",
              borderRadius: 15,
              paddingHorizontal: 10,
              fontSize: 16,
              marginVertical: 10,
              elevation: 2,
            }}
            placeholder={"Enter Items Here"}
            placeholderTextColor="grey"
          />
          <Picker
            style={{ marginBottom: 10, color: "#f1f1f1" }}
            dropdownIconColor={"#03dac6"}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Produce" value="Produce" />
            <Picker.Item label="Meat" value="Meat" />
            <Picker.Item label="Snacks" value="Snacks" />
            <Picker.Item label="Drinks" value="Drinks" />
          </Picker>
          <Button
          raised
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#bb86fc", "#bb86fc"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => SetItemResetText()}
            title="add item"
          />
          {/* <LinearGradient colors={["#8ecae6", "#219ebc"]} style={styles.button}>
            <Pressable onPress={() => SetItemResetText()} android_ripple>
              <Text style={{ color: "white", fontSize: 16 }}>Add Item</Text>
            </Pressable>
          </LinearGradient> */}
        </Card>
        <ListofItems itemsList={itemsList} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});
