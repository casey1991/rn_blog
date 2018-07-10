import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { InputToolbar } from "./InputToolbar";
import { MessagesContainer } from "./MessagesContainer";
import PropTypes from "prop-types";
export class Chat extends Component {
  static propTypes = {
    messages: PropTypes.array, // messages for show
    user: PropTypes.object // current user
  };
  static defaultProps = {};
  render() {
    const { messages, user } = this.props;
    return (
      <View>
        <MessagesContainer messages={messages} user={user} />
        <InputToolbar />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
