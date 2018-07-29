import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";
import PropTypes from "prop-types";
export class UserCard extends Component {
  static propTypes = {
    user: PropTypes.object,
    onPress: PropTypes.func
  };
  static defaultProps = {
    onPress: () => {}
  };
  _renderWithUser = () => {
    const { user } = this.props;
    return (
      <View styles={[styles.rightPanel]}>
        <Text h4>{user.name}</Text>
      </View>
    );
  };
  _renderWithoutUser = () => {
    return (
      <View styles={[styles.rightPanel]}>
        <Text h4>Login</Text>
      </View>
    );
  };
  render() {
    const { user, onPress } = this.props;
    return (
      <TouchableOpacity style={[styles.container]} onPress={onPress}>
        <Avatar rounded large />
        <View style={[styles.rightPanel]}>
          {user ? this._renderWithUser() : this._renderWithoutUser()}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  avatarContainer: {},
  rightPanel: {
    marginLeft: 10
  }
});
