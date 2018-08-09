import React, { Component } from "react";
import { Text as PTExt } from "react-native-paper";

export class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PTExt {...this.props} />;
  }
}
export default Text;
