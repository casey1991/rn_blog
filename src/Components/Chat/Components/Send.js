import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../Styles/Send.styles";
import Strings from "../Styles/Strings";
export default class SendButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string
  };
  static defaultProps = {
    text: "",
    onPress: () => {},
    disabled: false,
    label: Strings.TEXT_SEND
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress, disabled } = this.props;
    const enableStyle = !disabled ? "ENABLE" : "DISABLE";
    return (
      <TouchableOpacity
        style={[
          styles[enableStyle].sendButton,
          styles[enableStyle].buttonStyle
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        <Text style={styles[enableStyle].text}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
