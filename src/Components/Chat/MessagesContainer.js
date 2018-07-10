import React, { Component } from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import { MessageContainer } from "./MessageContainer";
export class MessagesContainer extends Component {
  static propTypes = {
    messages: PropTypes.array,
    user: PropTypes.object
  };
  _renderItem = ({ item }) => {
    return <MessageContainer align="LEFT" currentMessage={item} />;
  };
  _keyExtractor = (item, index) => item._id;
  render() {
    const { _renderItem, _keyExtractor } = this;
    const { messages } = this.props;
    return (
      <View>
        <FlatList
          renderItem={_renderItem}
          data={messages}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
