import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ListItem } from "../../Components/Common/ListItem/ListItem";
import { styles } from "./Message.styles";
import { Actions } from "../../Redux/Chat/actions";
import { Selector } from "../../Services";
class Messages extends Component {
  static navigationOptions = () => ({
    header: () => (
      <Toolbar>
        <ToolbarContent title="Message" titleStyle={[styles.toolbarTitle]} />
      </Toolbar>
    )
  });
  componentDidMount() {
    const { getRooms } = this.props;
    getRooms();
  }
  componentDidUpdate(prevProps) {
    const { token, getRooms } = this.props;
    if (token && !prevProps.token) {
      getRooms();
    }
  }
  _renderItem = ({ item }) => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <ListItem
        title={item.name}
        onPress={() => {
          navigate("ChatStack");
        }}
      />
    );
  };
  _keyExtractor = (item, index) => {
    return index + "";
  };
  render() {
    const { rooms } = this.props;
    return (
      <View style={[{ flex: 1 }]}>
        <FlatList
          data={rooms}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  token: state.auth.token,
  rooms: Selector.hydrate(state, state.chat.rooms)
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRooms: Actions.getRooms
    },
    dispatch
  );
export const MessagesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
