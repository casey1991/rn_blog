import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { UserCard } from "./Components/UserCard";
import { Actions } from "../../Redux/Auth/actions";

class Profile extends Component {
  _logout = () => {
    const { logout } = this.props;
    logout();
  };
  _login = () => {
    const { navigation } = this.props;
    navigation.navigate("Login");
  };
  _onUserCardPress = () => {
    const { user } = this.props;
    if (user) {
      this._logout();
    } else {
      this._login();
    }
  };
  render() {
    const { user } = this.props;
    return (
      <View>
        <UserCard onPress={this._onUserCardPress} user={user} />
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
export const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
