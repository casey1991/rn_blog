import React, { Component } from "react";
import { FlatList, View } from "react-native";
import md5 from "md5";
import PropTypes from "prop-types";
import Message from "./Message";
import LoadEarlier from "./LoadEarlier";
import Strings from "../Styles/Strings";
import Styles from "../Styles/MessageContainerStyles";
import * as _ from "lodash";
class MessageContainer extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
    onLoadEarlier: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    user: {},
    onLoadEarlier: () => {}
  };
  constructor(props) {
    super(props);
    const messagesData = this.prepareMessages(props.messages);
    this.state = {
      flatLayoutHeight: 0,
      dataSource: messagesData
    };
    this._flatList = React.createRef();
  }
  componentDidUpdate(prevProps) {
    const { messages: prevMessages } = prevProps;
    const { messages: currentMessages } = this.props;
    if (prevMessages.length === 0 && currentMessages.length > 0) {
      this.scrollToEnd(); // first load we should scroll to end
    }
    if (prevMessages === currentMessages) {
      return;
    }
    const messagesData = this.prepareMessages(currentMessages);
    this.setState({
      dataSource: messagesData
    });

    if (_.head(prevMessages) !== _.head(currentMessages)) {
      // new message insert we should scroll to end
      this.scrollToEnd();
    }
  }
  scrollToEnd() {
    this._flatList.current.scrollToOffset({ height: 0 });
  }
  prepareMessages(messages) {
    let result = [];
    result = messages.map((message, index) => {
      const previousMessage = messages[index + 1] || {};
      const nextMessage = messages[index - 1] || {};
      const toHash =
        JSON.stringify(message) + previousMessage._id + nextMessage._id;
      return { ...message, previousMessage, nextMessage, key: md5(toHash) };
    });
    return result;
  }
  renderItem = ({ item }) => {
    const messageProps = {
      key: item._id,
      currentMessage: item,
      previousMessage: item.previousMessage,
      nextMessage: item.nextMessage,
      position:
        item.user._id === this.props.user._id
          ? Strings.MESSAGE_POSITION_RIGHT
          : Strings.MESSAGE_POSITION_LEFT
    };

    return <Message {...messageProps} />;
    // return <View />;
  };
  renderLoadEarlier = () => {
    const loadEarlierProps = {
      isLoadingEarlier: this.props.isLoadingEarlier
    };
    return <LoadEarlier {...loadEarlierProps} />;
  };
  render() {
    return (
      <View style={[Styles.container]}>
        <FlatList
          onLayout={({ nativeEvent }) => {
            const { height } = nativeEvent.layout;
            if (this.state.flatLayoutHeight) {
              if (height > 0)
                this.setState({
                  flatListPrevHeight: height
                });
            } else {
              if (this.state.flatLayoutHeight > height) this.scrollToEnd();
            }
          }}
          inverted
          style={{ flex: 1 }}
          ref={this._flatList}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          onEndReachedThreshold={1}
          onEndReached={this.props.onLoadEarlier}
        />
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          {this.renderLoadEarlier()}
        </View>
      </View>
    );
  }
}
export default React.forwardRef((props, ref) => (
  <MessageContainer {...props} ref={ref} />
));
