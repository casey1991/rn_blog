import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Keyboard, TouchableOpacity } from "react-native";
import Send from "./Send";
import Composer from "./Composer";
import { styles } from "../Styles/InputToolbar.styles";

export default class InputToolBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    onSend: PropTypes.func,
    onInputTextChanged: PropTypes.func,
    onInputSizeChanged: PropTypes.func
  };
  static defalutProps = {
    text: undefined,
    onSend: () => {},
    onInputTextChanged: () => {},
    onInputSizeChanged: () => {}
  };
  constructor(props) {
    super(props);
    this._composer = React.createRef();
  }
  UNSAFE_componentWillMount = () => {
    this.keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  };
  componentWillUnmount = () => {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  };
  keyboardWillShow = () => {
    // console.log(e);
  };
  keyboardWillHide = () => {
    // console.log(e);
  };
  renderActions = () => {
    return (
      <View style={styles.actionBarLayout}>
        {this.renderSend()}
        {/* {this.renderMore()} */}
      </View>
    );
  };
  renderComposer = () => {
    const composerProps = {
      value: this.props.textInputValue,
      composerHeight: this.props.composerHeight,
      inputTextProps: this.props.inputTextProps,
      onInputTextChanged: this.props.onInputTextChanged,
      onInputSizeChanged: this.props.onInputSizeChanged
    };
    return <Composer {...composerProps} ref={this.props.textInputRef} />;
  };
  renderSend = () => {
    const sendProps = {
      text: this.props.text,
      onSend: this.props.onSend
    };
    return <Send {...sendProps} />;
  };
  renderMore = () => {
    const { toggleBottomActionArea } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          toggleBottomActionArea();
        }}
        style={{ width: 24, height: 24, backgroundColor: "#303" }}
      />
    );
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.composerLayout]}>{this.renderComposer()}</View>
      </View>
    );
  }
}
