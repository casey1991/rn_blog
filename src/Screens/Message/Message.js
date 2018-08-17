import React, { Component } from "react";
import { connect } from "react-redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { Chat, ThemeProvider, Contents } from "../../Components/Chat";
import { SafeAreaView } from "react-navigation";
// import { styles } from "./Message.styles";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadEarlier: false
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
      that.setState({ isLoadEarlier: false });
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
    const { isLoadEarlier } = this.state;
    const { _createLoaderTimer } = this;
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: "#FFF" }]}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <ThemeProvider>
          <Chat
            renderHeader={this._renderHeader}
            messages={Contents.Messages}
            user={Contents.User}
            isLoadEarlier={isLoadEarlier}
            onLoadEarlier={() => {
              console.log("onLoadEarlier");
              _createLoaderTimer();
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
