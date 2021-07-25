import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { View, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";

const Categories = (props) => {
  // Track inputted category

  const [newCategory, setNewCategory] = useState("");

  // Push category to list of categories

  const [updateCat, setUpdateCat] = useState([]);

  // Function to generate list of categories

  return (
    // Return Picker element with list of generated categories
    <View>
      <View style={{ flexDirection: "row" }}>
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
            marginRight: 5,
          }}
          onChangeText={(value) => {
            setNewCategory(value);
            console.log(newCategory);
          }}
          placeholder="Add Category"
          placeholderTextColor="grey"
        />
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#bb86fc", "#bb86fc"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          icon={
            <Icon name="plus" type="font-awesome" color="white" size={15} />
          }
          onPress={() => {
            setUpdateCat([...updateCat, newCategory]);
            console.log(updateCat);
          }}
          title=" Add"
        />
      </View>
      <Picker
        style={{ marginBottom: 10, color: "#f1f1f1" }}
        dropdownIconColor={"#03dac6"}
        selectedValue={props.selectedCat}
        onValueChange={(cat) => {
          props.setSelectedCat(cat);
          console.log(props.selectedCat);
        }}
      >
        {updateCat.map((cat) => (
          <Picker.Item label={cat} value={cat} />
        ))}
      </Picker>
    </View>
  );
};

export default Categories;
