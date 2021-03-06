import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { UserCard } from "./Components/UserCard";
import { Actions } from "../../Redux/Auth/actions";
import { Toolbar } from "../../Components/Toolbars/Toolbar";

class Profile extends Component {
  static navigationOptions = () => ({
    header: () => <Toolbar />
  });
  _login = () => {
    const { navigation } = this.props;
    navigation.navigate("AuthStack");
  };
  _setting = () => {
    const { navigation } = this.props;
    navigation.navigate("ProfileStack");
  };
  _onUserCardPress = () => {
    const { user } = this.props;
    if (user) {
      this._setting();
    } else {
      this._login();
    }
  };
  componentDidMount() {}
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
