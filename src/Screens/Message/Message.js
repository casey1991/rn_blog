import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SafeAreaView } from "react-navigation";
import { GraphqlRoom } from "./Containers/GraphqlRoom";
import * as _ from "lodash";
class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, navigation, selectedRoom } = this.props;
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: "#FFF" }]}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <GraphqlRoom
          navigation={navigation}
          user={currentUser}
          room={selectedRoom}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  currentUser: state.auth.user,
  selectedRoom: state.chat.selectedRoom
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export const MessageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
