import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Composer from "./Composer";
import { styles } from "../Styles/InputToolbar.styles";

export default class InputToolBar extends Component {
  static propTypes = {
    text: PropTypes.string,
    onSend: PropTypes.func,
    onInputTextChanged: PropTypes.func
  };
  static defalutProps = {
    text: undefined,
    onSend: () => {},
    onInputTextChanged: () => {}
  };
  constructor(props) {
    super(props);
    this._composer = React.createRef();
  }
  renderActions = () => {
    return <View style={styles.actionBarLayout}>{this.renderSend()}</View>;
  };
  renderComposer = () => {
    const { text, onInputTextChanged } = this.props;
    return <Composer value={text} onInputTextChanged={onInputTextChanged} />;
  };
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.composerLayout]}>{this.renderComposer()}</View>
      </View>
    );
  }
}
