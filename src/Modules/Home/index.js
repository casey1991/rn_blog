import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export class HomeScreen extends Component {
  componentDidMount() {
    console.log("home componentDidMount");
  }
  componentWillUnmount() {
    console.log("home componentWillUnmount");
  }
  _logout = () => {
    const { navigation } = this.props;
    navigation.navigate("AuthStack");
  };
  render() {
    return (
      <View>
        <Text>hello login</Text>
        <Text>hello login</Text>
        <Text>hello login</Text>
        <Button onPress={this._logout} title="LOGOUT" />
      </View>
    );
  }
}
