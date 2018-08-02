import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
import { ListItem } from "../../Components/Common/ListItem/ListItem";
import { styles } from "./Message.styles";
class Messages extends Component {
  static navigationOptions = () => ({
    header: () => (
      <Toolbar>
        <ToolbarContent title="Message" titleStyle={[styles.toolbarTitle]} />
      </Toolbar>
    )
  });
  _renderItem = ({ item }) => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <ListItem
        title={"title"}
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
    return (
      <View style={[{ flex: 1 }]}>
        <FlatList
          data={["1", "2", "3"]}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
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
