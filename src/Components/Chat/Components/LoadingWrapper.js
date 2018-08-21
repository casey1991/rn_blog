import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import LoadEarlier from "./LoadEarlier";
import ThemeWrapper from "./ThemeWrapper";

class LoadingWrapper extends Component {
  static propTypes = {
    isLoading: PropTypes.bool
  };
  static defaultProps = {
    isLoading: true
  };
  constructor(props) {
    super(props);
  }
  render() {
    const { isLoading } = this.props;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ position: "absolute" }}>
          <LoadEarlier isLoadingEarlier={isLoading} />
        </View>
        {this.props.children}
      </View>
    );
  }
}
export default ThemeWrapper(LoadingWrapper);
