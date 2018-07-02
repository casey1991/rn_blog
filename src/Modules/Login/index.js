import React, { Component } from "react";
import { View, Text, Button } from "react-native";
export class LoginScreen extends Component {
  componentDidMount() {
    console.log("login componentDidMount");
  }
  componentWillUnmount() {
    console.log("login componentWillUnmount");
  }
  _login = () => {
    const { navigation } = this.props;
    navigation.navigate("AppStack");
  };
  render() {
    return (
      <View>
        <Text>hello login page</Text>
        <Text>hello login page</Text>
        <Text>hello login page</Text>
        <Button title="LOGIN" onPress={this._login} />
      </View>
    );
  }
}
