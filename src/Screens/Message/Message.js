import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SafeAreaView } from "react-navigation";
import { Room } from "./Containers/GraphqlRoom";
import * as _ from "lodash";
class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor: "#FFF" }]}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <Room navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export const MessageScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
