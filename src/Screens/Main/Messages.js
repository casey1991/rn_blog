import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { Chat, ThemeProvider } from "../../Components/Chat";
class Messages extends Component {
  static navigationOptions = () => ({
    header: () => <Toolbar />
  });
  render() {
    return (
      <View style={[{ flex: 1 }]}>
        <ThemeProvider>
          <Chat />
        </ThemeProvider>
      </View>
    );
  }
}
const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});
export const MessagesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
