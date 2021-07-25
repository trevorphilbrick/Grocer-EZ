import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem, Button, Icon } from "react-native-elements";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: this.props.itemsList,
    };
  }

  render() {
    if (this.props.itemsList < 1) {
      return (
        <View style={{ alignItems: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="pizza-slice" type="font-awesome-5" />
            <Text style={{ fontSize: 18, color: "grey", marginHorizontal: 8 }}>
              {" "}
              Uh Oh...
            </Text>
            <Icon name="ice-cream" type="font-awesome-5" />
          </View>

          <Text style={{ color: "grey" }}> No items have been added yet</Text>
        </View>
      );
    } else {
      return (
        <View>
          {this.props.itemsList.map((item, i) => (
            <ListItem.Swipeable
              containerStyle={{ backgroundColor: "#2c2c2c" }}
              key={i}
              bottomDivider
              rightContent={
                <Button
                  onPress={() => {
                    this.props.removeItem(i);
                    this.setState(this.props.itemsList);
                  }}
                  style={{ backgroundColor: "red" }}
                  title="Delete"
                  icon={{ name: "delete", color: "white" }}
                  buttonStyle={{ minHeight: "100%" }}
                />
              }
            >
              <ListItem.Content>
                <ListItem.Title style={{ fontSize: 20, color: "#f1f1f1" }}>
                  {item.title}
                </ListItem.Title>
                <ListItem.Subtitle style={{ fontSize: 16, color: "#f1f1f1" }}>
                  {item.category}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem.Swipeable>
          ))}
        </View>
      );
    }
  }
}

export default ItemList;
