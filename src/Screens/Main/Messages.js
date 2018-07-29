import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
class Messages extends Component {
  render() {
    return <View />;
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export const MessagesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
