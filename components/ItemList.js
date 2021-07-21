import React, { Component } from "react";
import { View } from "react-native";
import { ListItem, Button, CheckBox } from "react-native-elements";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsList: this.props.itemsList,
    };
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem = (i) => {
    const array = this.props.itemsList;
    let index = array[i];
    array.splice(index, 1);
    this.setState(this.props.itemsList);
  };

  render() {
    return (
      <View>
        {this.props.itemsList.map((item, i) => (
          <ListItem.Swipeable
          containerStyle={{backgroundColor:'#2c2c2c'}}
            key={i}
            bottomDivider
            leftContent={
              <Button
                onPress={() => this.removeItem(i)}
                ButtonStyle={{ backgroundColor: "red" }}
                title="Delete"
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
                
              />
            }
            rightContent={
              <Button
                onPress={() => this.removeItem(i)}
                ButtonStyle={{ backgroundColor: "red" }}
                title="Delete"
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
              />
            }
          >
            <ListItem.Content>
              <ListItem.Title style={{fontSize: 20, color: "#f1f1f1"}}>{item.title}</ListItem.Title>
              <ListItem.Subtitle style={{fontSize: 16, color: "#f1f1f1"}}>{item.category}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem.Swipeable>
        ))}
      </View>
    );
  }
}

export default ItemList;
