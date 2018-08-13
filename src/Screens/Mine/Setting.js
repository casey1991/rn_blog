import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { Button } from "../../Components/Common/Button/Button";
import { Actions } from "../../Redux/Auth/actions";
import { Colors } from "../../Themes";

class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <Toolbar>
        <ToolbarBackAction
          dark
          onPress={() => {
            navigation.goBack(null);
          }}
        />
      </Toolbar>
    )
  });
  componentDidMount() {
    console.log("SettingScreen did mount!");
  }
  componentDidUpdate(prevProps) {
    const { user, navigation } = this.props;
    if (prevProps.user && !user) {
      navigation.goBack(null);
    }
  }
  _logout = () => {
    const { logout, navigation } = this.props;
    logout();
  };
  render() {
    const { logout } = this.props;
    return (
      <View>
        <Button onPress={this._logout}>LOGOUT</Button>
      </View>
    );
  }
}
const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: Actions.logout
    },
    dispatch
  );
export const SettingScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
