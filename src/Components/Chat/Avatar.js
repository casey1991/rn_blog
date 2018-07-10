import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Avatar as RNEAvatar } from "react-native-elements";
export class Avatar extends Component {
  static propTypes = {
    messages: PropTypes.array,
    user: PropTypes.object
  };
  render() {
    return <RNEAvatar rounded />;
  }
}
