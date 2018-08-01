import React, { Component } from "react";
import { FlatList, View, ImageBackground } from "react-native";
import md5 from "md5";
import PropTypes from "prop-types";
import Message from "./Message";
import LoadEarlier from "./LoadEarlier";
import Strings from "../Styles/Strings";
import Styles from "../Styles/MessageContainerStyles";
class MessageContainer extends Component {
  static defaultProps = {
    messages: [],
    invertibleScrollViewProps: {},
    user: {},
    isLoadingEarlier: false,
    loadEarlier: false,
    onLoadEarlier: () => {}
  };
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    invertibleScrollViewProps: PropTypes.object,
    user: PropTypes.object,
    isLoadingEarlier: PropTypes.bool,
    loadEarlier: PropTypes.bool,
    onLoadEarlier: PropTypes.func
  };
  constructor(props) {
    super(props);

    const messagesData = this.prepareMessages(props.messages);
    this.state = {
      dataSource: messagesData,
      loadEarlier: this.props.loadEarlier,
      isLoadingEarlier: this.props.isLoadingEarlier
    };
    this._flatList = React.createRef();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.messages === nextProps.messages) {
      return;
    }
    const messagesData = this.prepareMessages(nextProps.messages);
    this.setState({
      dataSource: messagesData
    });
  }
  scrollTo(options) {
    this._flatList.current.scrollToOffset(options);
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
          {...this.props.invertibleScrollViewProps}
          ref={this._flatList}
          data={this.state.dataSource}
          inverted
          renderItem={this.renderItem}
          enableEmptySections={true}
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (!this.props.isLoadingEarlier) this.props.onLoadEarlier();
          }}
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
