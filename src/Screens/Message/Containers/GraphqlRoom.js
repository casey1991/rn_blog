import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ggl from "graphql-tag";
import { Query } from "react-apollo";
import { Toolbar } from "../../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../../Components/Toolbars/ToolbarContent";
import { ToolbarBackAction } from "../../../Components/Toolbars/ToolbarBackAction";
import { Chat, ThemeProvider } from "../../../Components/Chat";

class GraphqlRoom extends Component {
  constructor(props) {
    super(props);
    this._query = ggl`
        query Room($room:String!){
            messages(roomId: $room){
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
  render() {
    const { currentUser } = this.props;
    return (
      <Query
        query={this._query}
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
