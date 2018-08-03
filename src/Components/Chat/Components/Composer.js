import React, { Component } from "react";
import PropTypes from "prop-types";

import { styles } from "../Styles/Composer.styles";
import Strings from "../Styles/Strings";
import { TextInput as RNTextInput } from "react-native";

export default class Composer extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    value: PropTypes.string,
    onInputTextChanged: PropTypes.func
  };
  static defaultProps = {
    onInputTextChanged: () => {}
  };
  onChangeText = text => {
    const { onInputTextChanged } = this.props;
    onInputTextChanged(text);
  };
  render() {
    return (
      <RNTextInput
        value={this.props.value}
        style={[styles.inputStyle]}
        numberOfLines={4}
        placeholder={Strings.TEXT_COMPOSER_PLACE_HOLDE}
        onChangeText={this.onChangeText}
        multiline
      />
    );
  }
}
