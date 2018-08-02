import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListSection } from "react-native-paper";

export class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ListSection.Item icon="build" {...this.props} />;
  }
}
