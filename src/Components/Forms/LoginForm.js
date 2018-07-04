import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { View, Text, StyleSheet } from "react-native";
class Login extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <Text>hei</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export const LoginForm = reduxForm({
  form: "login"
})(Login);
