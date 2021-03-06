import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Styles from "../Styles/LoadEarlierStyles";
import ThemeWrapper from "./ThemeWrapper";

class LoadEarlier extends Component {
  static defaultProps = {
    isLoadingEarlier: true
  };
  static propTypes = {
    isLoadingEarlier: PropTypes.bool
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoadingEarlier } = this.props;
    if (isLoadingEarlier) {
      return (
        <View style={Styles.container}>
          <View style={Styles.ring} />
        </View>
      );
    } else {
      return null;
    }
  }
}
export default ThemeWrapper(LoadEarlier);
