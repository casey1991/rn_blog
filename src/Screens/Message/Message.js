import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Chat } from "../../Components/Chat";
import { messages } from "./constants";
class Message extends Component {
  render() {
    return (
      <View>
        <Chat messages={messages} />
      </View>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export const MessageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
