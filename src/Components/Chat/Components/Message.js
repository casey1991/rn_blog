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
import utils from "../utils";
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
    const left = this.props.position === Strings.MESSAGE_POSITION_LEFT;
    return (
      <View style={[styles[this.props.position].layoutContent]}>
        {left ? (
          <View style={styles[this.props.position].layoutName}>
            <Name currentMessage={this.props.currentMessage} />
          </View>
        ) : null}
        <Bubble>
          <Content currentMessage={this.props.currentMessage} />
        </Bubble>
      </View>
    );
  };
  renderTime = () => {
    const {
      currentMessage,
      previousMessage,
      nextMessage,
      position
    } = this.props;
    const Styles = styles[position];
    const timeDiff = utils.timeDiffer(
      currentMessage.createdAt,
      previousMessage.createdAt
    );
    if (timeDiff >= 300)
      return (
        <View style={[Styles.layoutTime]}>
          <Time
            currentMessage={currentMessage}
            previousMessage={previousMessage}
            nextMessage={nextMessage}
          />
        </View>
      );
    else return null;
  };
  renderSystemMessage = () => {
    // const systemMessageProps = {};
    return <View />;
  };
  render() {
    const { position } = this.props;
    // const position = Strings.MESSAGE_POSITION_LEFT;
    const Styles = styles[position];
    //不描绘系统信息
    return (
      <View style={[Styles.layoutContainer, Styles.container]}>
        {this.renderTime()}
        <View style={[Styles.layoutBody]}>
          <View style={[Styles.layoutAvatar]}>
            {position === Strings.MESSAGE_POSITION_LEFT
              ? this.renderAvatar()
              : null}
          </View>
          {/* <Primary text="I'll see you in a bit ll see you in a bit ll see you in a bit ll see you in a bit ll see you in a bit ll see you in a bit ll see you in a bit ll see you in a bit" /> */}
          {this.renderContent()}
          <View style={[Styles.layoutAvatar]}>
            {position === Strings.MESSAGE_POSITION_RIGHT
              ? this.renderAvatar()
              : null}
          </View>
        </View>
      </View>
    );
  }
}
