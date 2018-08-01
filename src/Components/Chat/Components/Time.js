import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Styles from "../Styles/TimeStyles";
import { View, Text } from "react-native";
// import Utils from './Utils';
export default class Day extends Component {
  static defaultProps = {
    currentMessage: {},
    previousMessage: {},
    nextMessage: {}
  };
  static propTypes = {
    currentMessage: PropTypes.object,
    previousMessage: PropTypes.object,
    nextMessage: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[Styles.container, Styles.containerLayout]}>
        <Text style={[Styles.text]}>
          {moment(this.props.currentMessage.createdAt).format("LT")}
        </Text>
      </View>
    );
  }
}
