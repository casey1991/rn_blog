import React, { Component } from "react";
import { View, Text, Modal, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";

export default class BottomSheet extends Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOuterClicked: PropTypes.func
  };
  static defaultProps = {
    visible: false,
    onOuterClicked: () => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  render() {
    const { children, visible, onOuterClicked } = this.props;
    return (
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={() => {
              onOuterClicked();
            }}
          >
            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)" }} />
          </TouchableWithoutFeedback>
          <View style={{ minHeight: 200, backgroundColor: "#fff" }}>
            {children}
          </View>
        </View>
      </Modal>
    );
  }
}
