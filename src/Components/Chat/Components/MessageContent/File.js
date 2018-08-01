import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "../../Themes";
import PropTypes from "prop-types";
import PrimaryText from "../Text/Primary";
import HintText from "../Text/Hint";
class File extends Component {
  static propTypes = {
    invert: PropTypes.bool
  };
  static defaultProps = {
    invert: false
  };
  render() {
    return (
      <View
        style={[
          styles.layoutContainer,
          this.props.invert ? { flexDirection: "row-reverse" } : {}
        ]}
      >
        <View style={[styles.layoutFileInfo]}>
          <PrimaryText text={"my1-dashboard.png"} />
          <HintText text={"618k"} />
        </View>
        <View
          style={[
            styles.layoutFileImage,
            this.props.invert
              ? { marginRight: Dimensions.COMMON_MARGIN }
              : { marginLeft: Dimensions.COMMON_MARGIN }
          ]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layoutContainer: {
    flexDirection: "row"
  },
  layoutFileImage: {
    width: 40,
    height: 40,
    backgroundColor: "#eee"
  },
  layoutFileInfo: {
    flexDirection: "column"
  }
});
export default File;
