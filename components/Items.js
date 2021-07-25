import React from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-elements";
import ItemList from "./ItemList";

function ListofItems(props) {
  const itemsList = props.itemsList;

  return (
    <Card
      containerStyle={{
        backgroundColor: "rgba(255,255,255, 0.11)",
        borderWidth: 0,
        borderRadius: 5,
        elevation: 0,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={true}>
        <Card.Title style={{ color: "#bb86fc" }}>Groceries</Card.Title>
        <Card.Divider />
        <ItemList itemsList={itemsList} removeItem={props.removeItem} />
      </ScrollView>
    </Card>
  );
}

export default ListofItems;
