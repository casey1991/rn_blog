import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
class BottomActionArea extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    renderBottomActions: PropTypes.func
  };
  static defaultProps = {
    visible: false,
    renderBottomActions: () => {}
  };
  render() {
    const { visible } = this.props;
    if (!visible) return null;
    return (
      <View style={{ width: "100%", height: 200 }}>
        {this.props.renderBottomActions()}
      </View>
    );
  }
}

export default BottomActionArea;
