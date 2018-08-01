import React, { Component } from "react";
import PropTypes from "prop-types";

import { styles } from "../Styles/Composer.styles";
import Strings from "../Styles/Strings";
import Dimension from "../Styles/Dimension";
import { TextInput as RNTextInput } from "react-native";

class Composer extends Component {
  constructor(props) {
    super(props);
    this._textInput = React.createRef();
  }
  static propTypes = {
    value: PropTypes.string,
    composerHeight: PropTypes.number,
    onInputSizeChanged: PropTypes.func,
    onInputTextChanged: PropTypes.func
  };
  static defaultProps = {
    composerHeight: Dimension.MIN_COMPOSER_HEIGHT,
    onInputSizeChanged: () => {},
    onInputTextChanged: () => {}
  };
  onContentSizeChange = e => {
    const { contentSize } = e.nativeEvent;
    if (
      !this.contentSize ||
      this.contentSize.width !== contentSize.width ||
      this.contentSize.height !== contentSize.height
    ) {
      this.contentSize = contentSize;
      this.props.onInputSizeChanged(this.contentSize);
    }
  };
  render() {
    return (
      <RNTextInput
        ref={this.props.forwardRef}
        value={this.props.value}
        style={[styles.inputStyle]}
        numberOfLines={4}
        placeholder={Strings.TEXT_COMPOSER_PLACE_HOLDE}
        onContentSizeChange={e => this.onContentSizeChange(e)}
        onChangeText={text => this.props.onInputTextChanged(text)}
        blurOnSubmit={true}
        multiline
        {...this.props.inputTextProps}
      />
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Composer forwardRef={ref} {...props} />
));
