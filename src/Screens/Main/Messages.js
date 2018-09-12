import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { styles } from "./Message.styles";
import { Actions } from "../../Redux/Chat/actions";
import { Selector } from "../../Services";
import { GraphqlRooms } from "./Containers/GraphqlRooms";
class Messages extends Component {
  static navigationOptions = () => ({
    header: () => (
      <Toolbar>
        <ToolbarContent title="Message" titleStyle={[styles.toolbarTitle]} />
      </Toolbar>
    )
  });
  render() {
    return (
      <View style={[{ flex: 1 }]}>
        <GraphqlRooms />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  rooms: Selector.hydrateEntities(state, state.chat.rooms, "Room")
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRooms: Actions.getRooms,
      setSelectedRoom: Actions.setSelectedRoom
    },
    dispatch
  );
export const MessagesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
