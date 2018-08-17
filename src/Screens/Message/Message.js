import React, { Component } from "react";
import { connect } from "react-redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { Chat, ThemeProvider, Contents, Utils } from "../../Components/Chat";
import { SafeAreaView } from "react-navigation";
// import { styles } from "./Message.styles";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadEarlier: false,
      messages: Contents.Messages
    };
  }
  componentWillUnmount = () => {
    if (this._loadTimer) {
      clearTimeout(this._loadTimer);
      this._loadTimer = null;
    }
  };
  _createLoaderTimer = () => {
    this.setState({
      isLoadEarlier: true
    });
    const that = this;
    this._loadTimer = setTimeout(() => {
      const MessageBuilder = Utils.MessageBuilder;
      const messageBuilder = new MessageBuilder();
      messageBuilder.setText(new Date().toString());
      messageBuilder.setUser(Contents.User);
      const message = messageBuilder.build();
      const messages = this.state.messages;
      messages.push(message);
      that.setState({ isLoadEarlier: false, messages: messages });
    }, 1000);
  };
  _renderHeader = () => {
    const {
      navigation: { goBack }
    } = this.props;
    return (
      <Toolbar>
        <ToolbarBackAction
          onPress={() => {
            goBack(null);
          }}
        />
        <ToolbarContent title="Message" />
      </Toolbar>
    );
  };
  componentDidMount() {
    console.log("MessageScreen did mount!");
  }
  render() {
    const { isLoadEarlier, messages } = this.state;
    const { _createLoaderTimer } = this;
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: "#FFF" }]}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <ThemeProvider>
          <Chat
            renderHeader={this._renderHeader}
            messages={messages}
            user={Contents.User}
            isLoadEarlier={isLoadEarlier}
            onLoadEarlier={() => {
              // _createLoaderTimer();
              console.log("onLoadEarlier");
              this.setState({ isLoadEarlier: true });
              const MessageBuilder = Utils.MessageBuilder;
              const messageBuilder = new MessageBuilder();
              messageBuilder.setText(new Date().toString());
              messageBuilder.setUser(Contents.User);
              const message = messageBuilder.build();
              const messages = this.state.messages;
              messages.push(message);
              this.setState({ isLoadEarlier: false, messages: messages });
            }}
            renderItem={props => <Chat.Message {...props} />}
          />
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export const MessageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
