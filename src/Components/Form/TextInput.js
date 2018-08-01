import React, { Component } from "react";
import { TextInput as PTextInput } from "react-native-paper";
// import { TextInput as Input, StyleSheet } from "react-native";

export class TextInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      input,
      label,
      meta: { touched, error },
      type,
      placeholder
    } = this.props;
    return <PTextInput {...input} placeholder={placeholder} type={type} />;
  }
}
