import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar } from "./Avatar";
import { TextMessage } from "./Messages/TextMessage";
export class MessageContainer extends Component {
  static propTypes = {
    currentMessage: PropTypes.object,
    previousMessage: PropTypes.object,
    nextMessage: PropTypes.object,
    user: PropTypes.object,
    align: PropTypes.oneOf(["LEFT", "RIGHT"])
  };
  static defaultProps = {
    align: "LEFT"
  };
  render() {
    const { align, currentMessage } = this.props;
    return (
      <View
        style={[
          styles.container,
          align === "LEFT"
            ? { flexDirection: "row" }
            : { flexDirection: "row-reverse" }
        ]}
      >
        <Avatar />
        <TextMessage message={currentMessage} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
