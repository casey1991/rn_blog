import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import Bubble from "./Bubble";
import getMessageContentHelper from "./MessageContent/getMessageContentHelper";
import Time from "./Time";
import Name from "./Name";
import Strings from "../Styles/Strings";
import Constants from "../constants";
import { styles } from "../Styles/Message.styles";
import File from "./MessageContent/File";
import Image from "./MessageContent/Image";
import Location from "./MessageContent/Location";
import Text from "./MessageContent/Text";
import Voice from "./MessageContent/Voice";
import utils from "../utils";
export default class Message extends Component {
  static defaultProps = {
    position: Strings.MESSAGE_POSITION_LEFT,
    type: Constants.MESSAGE_TYPE_TEXT,
    message: {}
  };
  static propTypes = {
    position: PropTypes.oneOf([
      Strings.MESSAGE_POSITION_LEFT,
      Strings.MESSAGE_POSITION_RIGHT
    ]),
    type: PropTypes.number,
    message: PropTypes.object
  };
  static File = File;
  static Image = Image;
  static Location = Location;
  static Text = Text;
  static Voice = Voice;
  constructor(props) {
    super(props);
  }
  renderAvatar = () => {
    const { message } = this.props;
    const avatarProps = {
      message: message
    };
    return <Avatar {...avatarProps} />;
  };
  renderContent = () => {
    const { message, type, position } = this.props;
    const Content = getMessageContentHelper(type);
    const left = this.props.position === Strings.MESSAGE_POSITION_LEFT;
    return (
      <View style={[styles[position].layoutContent]}>
        {left ? (
          <View style={styles[position].layoutName}>
            <Name currentMessage={message} />
          </View>
        ) : null}
        <Bubble>
          <Content message={message} />
        </Bubble>
      </View>
    );
  };
  renderTime = () => {
    const { message, position } = this.props;
    const Styles = styles[position];
    const timeDiff = utils.timeDiffer(
      message.createdAt,
      message.previousMessage.createdAt
    );
    if (timeDiff >= 300)
      return (
        <View style={[Styles.layoutTime]}>
          <Time
            currentMessage={message}
            previousMessage={message.previousMessage}
            nextMessage={message.nextMessag}
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
