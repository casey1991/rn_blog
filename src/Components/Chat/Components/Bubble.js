import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../Styles/Bubble.styles";
export default class Bubble extends Component {
  static propTypes = {
    containerStyles: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ])
  };
  static defaultProps = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={[styles.layoutContainer]}>{this.props.children}</View>
      </View>
    );
  }
}
