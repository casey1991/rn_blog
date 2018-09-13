import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import ggl from "graphql-tag";
import PropType from "prop-types";
import { Query, Mutation } from "react-apollo";
import * as _ from "lodash";
import { Toolbar } from "../../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../../Components/Toolbars/ToolbarBackAction";
import {
  Chat,
  ThemeProvider,
  InputToolBar,
  Send
} from "../../../Components/Chat";

export class GraphqlRoom extends Component {
  static defaultProps = {
    user: PropType.shape({
      _id: PropType.string.isRequired
    }),
    room: PropType.string.isRequired,
    navigation: PropType.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
    this._QUERY_MESSAGES = ggl`
        query Room($room:String!){
            messages(roomId: $room){
                id
                text
                user{
                  id
                  name
                }
            }
        }
    `;
    this._CREATE_MESSAGE = ggl`
        mutation CreateMessage($roomId:String!,$text:String!,$type:Int!){
          createMessage(roomId:$roomId,text:$text,type:$type){
            id
            text
            user{
              id
              name
            }
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
    const { room } = this.props;
    return (
      <Mutation
        mutation={this._CREATE_MESSAGE}
        update={(cache, { data: { createMessage } }) => {
          const { messages } = cache.readQuery({
            query: this._QUERY_MESSAGES,
            variables: {
              room: room
            }
          });
          cache.writeQuery({
            query: this._QUERY_MESSAGES,
            variables: {
              room: room
            },
            data: { messages: messages.concat([createMessage]) }
          });
        }}
      >
        {createMessage => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <InputToolBar
                text={this.state.text}
                onInputTextChanged={value => {
                  this.setState({
                    text: value
                  });
                }}
              />
            </View>
            <View>
              <Send
                onPress={() => {
                  createMessage({
                    variables: {
                      roomId: room,
                      text: this.state.text,
                      type: 1
                    }
                  });
                  this.setState({
                    text: null
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
    const { user, room } = this.props;
    return (
      <Query
        query={this._QUERY_MESSAGES}
        variables={{
          room: room
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <ThemeProvider>
              <Chat
                renderHeader={this._renderHeader}
                messages={_.map(data.messages, ({ id: _id, ...rest }) => {
                  const formated = { _id, ...rest };
                  const user = formated.user;
                  return {
                    ...formated,
                    user: { ...user, _id: user.id }
                  };
                })}
                user={user}
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
