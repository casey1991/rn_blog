import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Styles from "../Styles/TimeStyles";
import { View, Text } from "react-native";
// import Utils from './Utils';
export default class Time extends Component {
  static defaultProps = {
    message: {}
  };
  static propTypes = {
    message: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  _formatTime = () => {
    const {
      message: { createdAt: currentCreateAt }
    } = this.props;
    const currentTime = moment(currentCreateAt);
    const timenow = moment(new Date());
    const inFiveMinute = timenow.diff(currentTime, "days") < 1;
    return inFiveMinute
      ? currentTime.format("HH:mm")
      : currentTime.format("YYYY/MM/DD HH:mm");
  };
  render() {
    return (
      <View style={[Styles.container, Styles.layoutContianer]}>
        <Text style={[Styles.text]}>{this._formatTime()}</Text>
      </View>
    );
  }
}
