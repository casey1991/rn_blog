import React, { Component } from "react";
import { Appbar } from "react-native-paper";

export class ToolbarAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;
    return <Appbar.Action {...rest} />;
  }
}
