import React, { Component } from "react";
import { Text } from "react-native-elements";
import { View } from "react-native";
import PropTypes from "prop-types";
export class TextMessage extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  render() {
    const { message } = this.props;
    return <Text>{message.text}</Text>;
  }
}
