import { Component, Children } from "react";
import PropTypes from "prop-types";
import { Colors, Dimensions } from "../Themes";
export default class ThemeProvider extends Component {
  static propTypes = {
    theme: PropTypes.object
  };
  static defaultProps = {
    theme: { Colors, Dimensions }
  };
  static childContextTypes = {
    theme: PropTypes.object
  };
  getChildContext() {
    const { theme } = this.props;
    return { theme };
  }
  render() {
    return Children.only(this.props.children);
  }
}
