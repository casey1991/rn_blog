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
    renderMessage: PropTypes.func,
    user: PropTypes.object,
    canLoadMore: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    isLoadingMore: PropTypes.bool,
    onLoadMore: PropTypes.func
  };
  static defaultProps = {
    messages: [],
    renderMessage: () => {},
    user: {},
    canLoadMore: false,
    isLoadingMore: false,
    onLoadMore: () => {}
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
  _renderMessage = ({ item }) => {
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
  _onScroll = event => {
    const { onLoadMore } = this.props;
    if (this._shouldLoadMore(event)) {
      onLoadMore();
    }
  };
  _shouldLoadMore = event => {
    var canLoadMore =
      typeof this.props.canLoadMore === "function"
        ? this.props.canLoadMore()
        : this.props.canLoadMore;

    canLoadMore =
      !this.props.isLoadingMore &&
      canLoadMore &&
      this._distanceFromEnd(event) < 80;
    return canLoadMore;
  };
  _distanceFromEnd = event => {
    let {
      contentSize,
      contentInset,
      contentOffset,
      layoutMeasurement
    } = event.nativeEvent;

    let contentLength;
    let trailingInset;
    let scrollOffset;
    let viewportLength;
    if (this.props.horizontal) {
      contentLength = contentSize.width;
      trailingInset = contentInset.right;
      scrollOffset = contentOffset.x;
      viewportLength = layoutMeasurement.width;
    } else {
      contentLength = contentSize.height;
      trailingInset = contentInset.bottom;
      scrollOffset = contentOffset.y;
      viewportLength = layoutMeasurement.height;
    }

    return contentLength + trailingInset - scrollOffset - viewportLength;
  };
  render() {
    const { renderMessage, isLoadingMore } = this.props;
    const { dataSource } = this.state;
    const { _flatList, _onScroll } = this;
    return (
      <View style={[Styles.container]}>
        <LoadingWrapper isLoading={isLoadingMore}>
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
              return renderMessage(messageProps);
            }}
            onScroll={_onScroll}
          />
        </LoadingWrapper>
      </View>
    );
  }
}
