import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View, StyleSheet, TextInput } from "react-native";
class Login extends Component {
  render() {
    return (
      <View>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email"
        />
        <Field
          name="password"
          component={TextInput}
          type="text"
          placeholder="Password"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export const LoginForm = reduxForm({
  form: "login"
})(Login);
