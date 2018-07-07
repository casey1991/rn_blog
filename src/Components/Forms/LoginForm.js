import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { View, StyleSheet } from "react-native";
import { TextInput } from "../Form/TextInput";
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
          type="password"
          placeholder="Password"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export const LoginForm = reduxForm({
  form: "login",
  initialValues: {
    email: "email@email.com",
    password: "abc123"
  }
})(Login);
