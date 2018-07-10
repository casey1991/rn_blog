import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar } from "./Avatar";
export class BubbleWrapper extends Component {
  static propTypes = {
    messages: PropTypes.array,
    user: PropTypes.object
  };
  static defaultProps = {
    align: "LEFT"
  };
  render() {
    return <View style={[styles.container]} />;
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
