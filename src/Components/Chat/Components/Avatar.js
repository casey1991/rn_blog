import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "../Styles/Avatar.styles";
import ThemeWrapper from "./ThemeWrapper";
class Avatar extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    message: PropTypes.object
  };
  static defaultProps = {
    onPress: () => {},
    message: {}
  };
  constructor(props) {
    super(props);
  }
  render() {
    let inner;
    const { Colors } = this.props.theme;
    const { message } = this.props;
    const imageSource =
      message.user && message.user.avatars && message.user.avatars[0]
        ? message.user.avatars[0].uri
        : null;
    if (imageSource) {
      inner = <Image source={{ uri: imageSource }} style={styles.image} />;
    } else {
      inner = (
        <View style={[styles.image, { backgroundColor: Colors.hintColor }]} />
      );
    }
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[styles.container]}>{inner}</View>
      </TouchableOpacity>
    );
  }
}
export default ThemeWrapper(Avatar);
