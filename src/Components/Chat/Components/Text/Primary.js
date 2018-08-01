import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { styles } from "../../Styles/Text/Primary.styles";

class Primary extends Component {
  static propTypes = { text: PropTypes.string };
  static defaultProps = {
    text: "text"
  };
  render() {
    return (
      <View>
        <Text style={[styles.textStyles]}>{this.props.text}</Text>
      </View>
    );
  }
}

export default Primary;
