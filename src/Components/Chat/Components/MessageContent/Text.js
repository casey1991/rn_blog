import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryText from "../Text/Primary";
import PropTypes from "prop-types";
class Text extends Component {
  static propTypes = {
    message: PropTypes.object
  };
  static defaultProps = {
    message: {
      text: "do not forget pass message in"
    }
  };
  render() {
    const { message } = this.props;
    return (
      <View style={[styles.layoutContainer]}>
        <PrimaryText text={message.text} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layoutContainer: {}
});
export default Text;
