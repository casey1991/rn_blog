import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Bubble from "./Bubble";
import getMessageContentHelper from "./MessageContent/getMessageContentHelper";
import Day from "./Day";
import Time from "./Time";
import Name from "./Name";
import Strings from "../Styles/Strings";
import { styles } from "../Styles/Message.styles";
export default class Message extends Component {
  static defaultProps = {
    position: Strings.MESSAGE_POSITION_LEFT,
    currentMessage: {},
    previousMessage: {},
    nextMessage: {}
  };
  static propTypes = {
    position: PropTypes.oneOf([
      Strings.MESSAGE_POSITION_LEFT,
      Strings.MESSAGE_POSITION_RIGHT
    ]),
    currentMessage: PropTypes.object,
    previousMessage: PropTypes.object,
    nextMessage: PropTypes.object
  };
  constructor(props) {
    super(props);
  }
  renderAvatar = () => {
    const avatarProps = {
      currentMessage: this.props.currentMessage,
      previousMessage: this.props.currentMessage.previousMessage,
      nextMessage: this.props.currentMessage.nextMessage
    };
    return <Avatar {...avatarProps} />;
  };
  renderDay = () => {
    const dayProps = {
      currentMessage: this.props.currentMessage,
      previousMessage: this.props.previousMessage,
      nextMessage: this.props.nextMessage
    };
    return <Day {...dayProps} />;
  };
  renderContent = () => {
    const currentMessage = this.props.currentMessage;
    const Content = getMessageContentHelper(currentMessage.type);
    return (
      <View>
        <View style={styles[this.props.position].topInfoLayout}>
          <Name currentMessage={this.props.currentMessage} />
          {/* <Time currentMessage={this.props.currentMessage} /> */}
        </View>
        <View style={styles[this.props.position].bubbleLayout}>
          <Bubble>
            <Content currentMessage={this.props.currentMessage} />
          </Bubble>
        </View>
      </View>
    );
  };
  renderSystemMessage = () => {
    // const systemMessageProps = {};
    return <View />;
  };
  render() {
    //不描绘系统信息
    return (
      <View
        style={[
          styles[this.props.position].container,
          styles[this.props.position].messageStyle
        ]}
      >
        <View style={[styles[this.props.position].layoutAvatar]}>
          {this.props.position === Strings.MESSAGE_POSITION_LEFT
            ? this.renderAvatar()
            : null}
        </View>
        <View style={[styles[this.props.position].layoutContent]}>
          {this.renderContent()}
        </View>
        <View style={[styles[this.props.position].layoutAvatar]}>
          {this.props.position === Strings.MESSAGE_POSITION_RIGHT
            ? this.renderAvatar()
            : null}
        </View>
      </View>
    );
  }
}
