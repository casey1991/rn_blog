import React, { Component } from "react";
import PropTypes from "prop-types";
import Styles from "../Styles/DayStyles";
import { View, Text } from "react-native";
export default class Name extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  static defaultProps = {
    message: {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { message } = this.props;
    return (
      <View styl={[Styles.container]}>
        <Text>{message.user.name}</Text>
      </View>
    );
  }
}
