import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Card, Button, Header, Icon } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

// COMPONENTS
import ListofItems from "./components/Items";



export default function App() {
  // State Data

  // Item name inputted into new item input
  const [item, setItem] = useState("");

  // Array of Items
  const [itemsList, setItemsList] = useState([]);

  // Category selector
  const [category, setCategory] = useState("");

  // Category List
  // const [categoryList, setCategoryList] = useState([]);

  // Selected Category
  // const [selectedCategory, setSelectedCategory] = useState("")

  // Combine setItem Function and setItemsList function to add object ot state and clear input text feild
  const addItem = () => {
    setItemsList([...itemsList, { title: item, category: category }]);
  };

  // Remove Item From itemsList array
  removeItem = (i) => {
    itemsList;
    itemsList.splice(i, 1);
    setItemsList(itemsList);
    setData();
  };

  // Before component loads this function is run
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [itemsList]);

  // Set data to local storage every time the itemsList is updated
  const setData = async () => {
    try {
      await AsyncStorage.setItem("itemsList", JSON.stringify(itemsList)).then();
    } catch (error) {
      console.log(error);
    }
  };

  // Receive data from local storage
  const getData = async () => {
    try {
      AsyncStorage.getItem("itemsList").then((value) => {
        if (value != null) {
          let parsedValue = JSON.parse(value);
          setItemsList(itemsList.concat(parsedValue));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "#121212" }}>
      <Header
        backgroundColor={"#03dac6"}
        elevated
        centerComponent={{ text: "Grocer-EZ", style: { color: "#fff" } }}
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
          {/* <View style={{flexDirection:"row"}}>
            <TextInput
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
                flex: 3,
                marginRight:5
              }}
              onChangeText={value => {
                setCategory(value);
                console.log(category);
              } 
            }
            />
            <Button
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["#bb86fc", "#bb86fc"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              icon={<Icon 
                name="plus"
                type="font-awesome"
                color="white" 
                size={15}
                />
              }
              onPress={() => {
                setCategoryList([...categoryList, category])
              console.log(categoryList)
              }
              }
              title=" Add"
            />
          </View> */}
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
            {/* {categoryList.map((cat) => {
              <Picker.Item label={cat} value={cat} />;
            // })} */}
          </Picker>
          <Button
            raised
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#bb86fc", "#bb86fc"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => addItem()}
            icon={<Icon 
              name="cart-plus"
              type="font-awesome"
              color="white" 
              size={15}
              />
            }
            title=" Add Item"
          />
        </Card>
        <ListofItems itemsList={itemsList} removeItem={removeItem} />
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
