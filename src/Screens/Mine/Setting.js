import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "../../Redux/Auth/actions";
import { Colors } from "../../Themes";

class Setting extends Component {
  componentDidUpdate(prevProps) {
    const { user, navigation } = this.props;
    if (prevProps.user && !user) {
      navigation.goBack();
    }
  }
  _logout = () => {
    const { logout } = this.props;
    logout();
  };
  render() {
    const { logout } = this.props;
    return (
      <View>
        <Button
          title="LOGOUT"
          onPress={this._logout}
          backgroundColor={Colors.PRIMARY}
        />
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
