import React, { Component } from "react";
import { TextInput as Input, StyleSheet } from "react-native";

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
    return <Input {...input} placeholder={placeholder} type={type} />;
  }
}

const styles = StyleSheet.create({});
