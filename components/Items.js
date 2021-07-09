import React from "react";
import { Card, Badge } from "react-native-elements";
import ItemList from "./ItemList";

function ListofItems(props) {
  const itemsList = props.itemsList;

  return (
    <Card containerStyle={{
        backgroundColor: "rgba(255,255,255, 0.11)",
        borderWidth: 0,
        borderRadius: 5,
        elevation: 0,
      }} >
      {/* <Badge
        status="success"
        containerStyle={{ position: "absolute", top: -4, right: -4, backgroundColor:"#03dac6" }}
        value={itemsList.length}
      /> */}
      <Card.Title style={{ color: "#bb86fc" }} >Groceries</Card.Title>
      <Card.Divider />

      <ItemList itemsList={itemsList} />
    </Card>
  );
}

export default ListofItems;
