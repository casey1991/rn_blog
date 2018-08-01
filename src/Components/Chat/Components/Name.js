import React, { Component } from "react";
import PropTypes from "prop-types";
import Styles from "../Styles/DayStyles";
import { View, Text } from "react-native";
export default class Name extends Component {
  static defaultProps = {
    currentMessage: {}
  };
  static propTypes = {
    currentMessage: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View styl={[Styles.container]}>
        <Text>{this.props.currentMessage.user.name}</Text>
      </View>
    );
  }
}
