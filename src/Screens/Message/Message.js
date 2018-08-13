import React, { Component } from "react";
// import { View } from "react-native";
import { connect } from "react-redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { Chat, ThemeProvider, Contents } from "../../Components/Chat";
import { SafeAreaView } from "react-navigation";
// import { styles } from "./Message.styles";

class Message extends Component {
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
