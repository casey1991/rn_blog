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
    user: PropTypes.object,
    onSend: PropTypes.func,
    canLoadMore: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    isLoadingMore: PropTypes.bool,
    onLoadMore: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    renderMessage: () => {},
    user: {},
    onSend: () => {},
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
    this.state = {
      text: ""
    };
  }
  onInputTextChanged = text => {
    this.setState({
      text
    });
  };
  onSend = () => {
    const { user } = this.props;
    const { text } = this.state;
    const mesageBuilder = new MessageBuilder();
    mesageBuilder.setText(text);
    mesageBuilder.setUser(user._id.toString());
    const msg = mesageBuilder.build();
    this.setState({
      text: ""
    });
    this.props.onSend(msg);
  };

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
  renderInputToolBar = () => {
    const { onInputTextChanged } = this;
    const { text } = this.state;
    return <InputToolBar text={text} onInputTextChanged={onInputTextChanged} />;
  };
  renderSend = () => {
    const { onSend } = this;
    const { text } = this.state;
    return <Send disabled={text.trim().length <= 0} onPress={onSend} />;
  };
  render() {
    return (
      <View style={[styles.layoutContainer]}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          {this.props.renderHeader()}
          <View style={[styles.layoutMessageContainer]}>
            {this.renderMessages()}
          </View>
          <View style={[styles.layoutBottomActions]}>
            <View style={[styles.layoutTextInput]}>
              {this.renderInputToolBar()}
            </View>
            <View style={[styles.layoutActions]}>{this.renderSend()}</View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
