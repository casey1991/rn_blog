import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryText from "../Text/Primary";
import PropTypes from "prop-types";
class Text extends Component {
  static propTypes = {
    currentMessage: PropTypes.object
  };
  static defaultProps = {
    currentMessage: {
      text: "do not forget pass message in"
    }
  };
  render() {
    return (
      <View style={[styles.layoutContainer]}>
        <PrimaryText text={this.props.currentMessage.text} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layoutContainer: {}
});
export default Text;
