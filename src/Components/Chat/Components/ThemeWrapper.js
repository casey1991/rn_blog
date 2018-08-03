import React, { Component } from "react";
import PropTypes from "prop-types";
const ThemeWrapper = ComponentToWrap => {
  return class ThemeComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object.isRequired
    };
    render() {
      const { theme } = this.context;
      return <ComponentToWrap {...this.props} theme={theme} />;
    }
  };
};

export default ThemeWrapper;
