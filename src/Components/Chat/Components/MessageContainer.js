import React, { Component } from "react";
import { FlatList, View } from "react-native";
import md5 from "md5";
import PropTypes from "prop-types";
import Message from "./Message";
import LoadingWrapper from "./LoadingWrapper";
import Strings from "../Styles/Strings";
import Styles from "../Styles/MessageContainerStyles";
import * as _ from "lodash";
export default class MessageContainer extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    renderItem: PropTypes.func,
    user: PropTypes.object,
    onLoadEarlier: PropTypes.func,
    isLoadEarlier: PropTypes.bool
  };
  static defaultProps = {
    messages: [],
    renderItem: () => {},
    user: {},
    onLoadEarlier: () => {},
    isLoadEarlier: false
  };
  constructor(props) {
    super(props);
    const messagesData = this.prepareMessages(props.messages);
    this.state = {
      flatLayoutHeight: 0,
      dataSource: messagesData
    };
    this._flatList = React.createRef();
    this._canLoadEarlier = false;
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
    const newInsert = this._newInsert(prevMessages, currentMessages);
    if (newInsert) this.scrollToEnd();
  }
  _newInsert = (prev, current) => {
    const prevHead = _.head(prev);
    const currentHead = _.head(current);
    if (!currentHead) {
      return false;
    }
    if (!prevHead && currentHead) {
      return true;
    }
    if (prevHead._id !== currentHead._id) {
      return true;
    }
    return false;
  };
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
      message: item,
      position:
        item.user._id === this.props.user._id
          ? Strings.MESSAGE_POSITION_RIGHT
          : Strings.MESSAGE_POSITION_LEFT
    };

    return <Message {...messageProps} />;
    // return <View />;
  };
  render() {
    const { renderItem, onLoadEarlier, isLoadEarlier } = this.props;
    const { dataSource } = this.state;
    const { _flatList } = this;
    return (
      <View style={[Styles.container]}>
        <LoadingWrapper isLoading={isLoadEarlier}>
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
            ref={_flatList}
            data={dataSource}
            renderItem={({ item }, index) => {
              const messageProps = {
                message: item,
                position:
                  item.user._id === this.props.user._id
                    ? Strings.MESSAGE_POSITION_RIGHT
                    : Strings.MESSAGE_POSITION_LEFT
              };
              return renderItem(messageProps);
            }}
            onEndReachedThreshold={0.1}
            onEndReached={() => {
              onLoadEarlier();
            }}
          />
        </LoadingWrapper>
      </View>
    );
  }
}
