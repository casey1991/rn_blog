import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import ggl from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { Toolbar } from "../../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../../Components/Toolbars/ToolbarBackAction";
import {
  Chat,
  ThemeProvider,
  InputToolBar,
  Send
} from "../../../Components/Chat";

class GraphqlRoom extends Component {
  constructor(props) {
    super(props);
    this._QUERY_MESSAGES = ggl`
        query Room($room:String!){
            messages(roomId: $room){
                id
                text
            }
        }
    `;
    this._CREATE_MESSAGE = ggl`
        mutation CreateMessage($roomId:String!,$text:String!,$type:Int!){
          createMessage(roomId:$roomId,text:$text,type:$type){
            id
            text
          }
        }
    `;
  }
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
  _renderActions = () => {
    return (
      <Mutation mutation={this._CREATE_MESSAGE}>
        {createMessage => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <InputToolBar />
            </View>
            <View>
              <Send
                onPress={() => {
                  createMessage({
                    variables: {
                      roomId: "5b76d92b65c7305de53818c1",
                      text: "text",
                      type: 1
                    }
                  });
                }}
              />
            </View>
          </View>
        )}
      </Mutation>
    );
  };
  render() {
    const { currentUser } = this.props;
    return (
      <Query
        query={this._QUERY_MESSAGES}
        variables={{
          room: "5b76d92b65c7305de53818c1"
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <ThemeProvider>
              <Chat
                renderHeader={this._renderHeader}
                messages={data.messages}
                user={currentUser}
                renderMessage={props => <Chat.Message {...props} />}
                renderActions={this._renderActions}
              />
            </ThemeProvider>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export const Room = connect(
  mapStateToProps,
  mapDispatchToProps
)(GraphqlRoom);
