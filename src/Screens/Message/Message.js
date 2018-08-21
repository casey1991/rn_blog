import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { Chat, ThemeProvider, Contents, Utils } from "../../Components/Chat";
import { SafeAreaView } from "react-navigation";
import { Actions } from "../../Redux/Chat/actions";
import { Selector } from "../../Services";
import * as _ from "lodash";

class Message extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    const { getMessages, room, offset, limit } = this.props;
    getMessages({ room, offset, limit });
  };
  componentWillUnmount = () => {
    const { cleanMessages } = this.props;
    cleanMessages();
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
  render() {
    const {
      messages,
      sendMessage,
      room,
      currentUser,
      getMessages,
      isLoading,
      offset,
      limit
    } = this.props;
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: "#FFF" }]}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <ThemeProvider>
          <Chat
            renderHeader={this._renderHeader}
            messages={messages}
            user={currentUser}
            isLoadEarlier={isLoading}
            onLoadEarlier={() => {
              if (!isLoading) {
                getMessages({ room, offset: offset + limit, limit });
              }
            }}
            onSend={data => {
              sendMessage(_.assign(data, { room: room }));
            }}
            renderItem={props => <Chat.Message {...props} />}
          />
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  room: state.chat.selectedRoom,
  currentUser: state.auth.user,
  offset: state.chat.paginate.offset,
  limit: state.chat.paginate.limit,
  isLoading: state.chat.paginate.isLoading,
  messages: Selector.hydrateEntities(state, state.chat.messages, "Message")
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMessages: Actions.getMessages,
      sendMessage: Actions.sendMessage,
      cleanMessages: Actions.cleanMessages
    },
    dispatch
  );
export const MessageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
