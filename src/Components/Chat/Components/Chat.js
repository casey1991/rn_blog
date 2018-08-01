import React, { Component } from "react";
import {
  View,
  PanResponder,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import MessageContainer from "./MessageContainer";
import BottomActionArea from "./BottomActionArea";
import InputToolBar from "./InputToolBar";
import Send from "./Send";
import { styles } from "../Styles/Chat.styles";
import { MessageBuilder } from "./Utils";
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomActionAreaShowing: false,
      keyboardShowing: false,
      text: ""
    };

    this._messagesContainerPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: this._messagesMoveShouldSetPanResponder,
      onMoveShouldSetPanResponderCapture: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onStartShouldSetPanResponder: this._messageShartShouldSetPanResponder
    });
    this._textInput = React.createRef();
    this._messagesContainer = React.createRef();
  }
  _messageShartShouldSetPanResponder = () => {
    this.setState({ bottomActionAreaShowing: false });
    return false;
  };
  _messagesMoveShouldSetPanResponder = () => {
    this.setState({ bottomActionAreaShowing: false });
    return false;
  };
  toggleBottomActionArea = () => {
    Keyboard.dismiss();
    this.setState({
      bottomActionAreaShowing: !this.state.bottomActionAreaShowing
    });
  };
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
    this.scrollToBottom();
  };

  scrollToBottom = () => {
    if (this._messagesContainer) {
      this._messagesContainer.current.scrollTo({ y: 0, animated: true });
    }
  };
  renderMessages = () => {
    const messageContainerProps = {
      messages: this.props.messages,
      user: this.props.user,
      loadEarlier: this.props.loadEarlier,
      isLoadingEarlier: this.props.isLoadingEarlier,
      onLoadEarlier: this.props.onLoadEarlier,
      ref: this._messagesContainer
    };
    return <MessageContainer {...messageContainerProps} />;
  };
  renderInputToolBar = () => {
    const inputToolbarProps = {
      text: this.state.text,
      onInputSizeChanged: this.onInputSizeChanged,
      onInputTextChanged: this.onInputTextChanged,
      toggleBottomActionArea: this.toggleBottomActionArea,
      onSend: this.onSend,
      textInputRef: this._textInput,
      textInputValue: this.state.text
    };
    return <InputToolBar {...inputToolbarProps} />;
  };
  renderBottomActionArea = () => {
    const bottomActionAreaProps = {
      visible: this.state.bottomActionAreaShowing,
      renderBottomActions: this.props.renderBottomActions
    };
    return <BottomActionArea {...bottomActionAreaProps} />;
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
          <View
            style={[styles.layoutMessageContainer]}
            {...this._messagesContainerPanResponder.panHandlers}
          >
            {this.renderMessages()}
          </View>
          <View style={[styles.layoutBottomActions]}>
            <View style={[styles.layoutTextInput]}>
              {this.renderInputToolBar()}
            </View>
            {this.renderBottomActionArea()}
            <View style={[styles.layoutActions]}>{this.renderSend()}</View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
Chat.defaultProps = {
  messages: [],
  user: {},
  onSend: () => {},
  loadEarlier: false,
  onLoadEarlier: () => {},
  renderHeader: () => {},
  renderBottomActions: () => {},
  isLoadingEarlier: false
};
Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object,
  onSend: PropTypes.func,
  loadEarlier: PropTypes.bool,
  onLoadEarlier: PropTypes.func,
  isLoadingEarlier: PropTypes.bool
};
