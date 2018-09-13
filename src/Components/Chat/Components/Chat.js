import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import PropTypes from "prop-types";
import MessageContainer from "./MessageContainer";
import InputToolBar from "./InputToolBar";
import Send from "./Send";
import { styles } from "../Styles/Chat.styles";
import { MessageBuilder } from "../utils";
import Message from "./Message";
import Avatar from "./Avatar";
import Bubble from "./Bubble";
import Time from "./Time";
export default class Chat extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    renderMessage: PropTypes.func,
    renderActions: PropTypes.func,
    user: PropTypes.object,
    canLoadMore: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    isLoadingMore: PropTypes.bool,
    onLoadMore: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    renderMessage: () => {},
    user: {},
    canLoadMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
  };
  static Message = Message;
  static Avatar = Avatar;
  static Bubble = Bubble;
  static Time = Time;
  constructor(props) {
    super(props);
  }

  renderMessages = () => {
    const {
      messages,
      user,
      canLoadMore,
      isLoadingMore,
      onLoadMore,
      renderMessage
    } = this.props;
    return (
      <MessageContainer
        messages={messages}
        user={user}
        ref={this._messageContainer}
        renderMessage={renderMessage}
        canLoadMore={canLoadMore}
        isLoadingMore={isLoadingMore}
        onLoadMore={onLoadMore}
      />
    );
  };
  _renderInputToolBar = () => {
    return <InputToolBar text={text} onInputTextChanged={onInputTextChanged} />;
  };
  _renderSend = () => {
    return <Send disabled={text.trim().length <= 0} onPress={onSend} />;
  };
  _renderActions = () => {
    const { renderActions } = this.props;
    if (renderActions) {
      return renderActions();
    } else {
      return (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.layoutTextInput}>
            {this._renderInputToolBar()}
          </View>
          <View style={styles.layoutSend}>{this._renderSend()}</View>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={[styles.layoutContainer]}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {this.props.renderHeader()}
          <View style={[styles.layoutMessageContainer]}>
            {this.renderMessages()}
          </View>
          <View style={[styles.layoutActions]}>{this._renderActions()}</View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
