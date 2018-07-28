import React, { Component } from "react";
import { Appbar } from "react-native-paper";

export class ToolbarBackAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ...rest } = this.props;
    return <Appbar.BackAction {...rest} />;
  }
}
