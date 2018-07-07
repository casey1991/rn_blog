import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";
import { LoginForm } from "../../Components/Forms/LoginForm";
import { Colors } from "../../Themes";
import { Actions } from "../../Redux/Auth/actions";
import { store } from "../../Redux/index";

class Login extends Component {
  componentDidUpdate(prevProps) {
    const { user, navigation } = this.props;
    if (user && !prevProps.user) {
      navigation.goBack(null);
    }
  }
  _login = () => {
    const { login, loginForm } = this.props;
    login(loginForm.values);
  };
  render() {
    return (
      <View>
        <LoginForm />
        <Button
          title="LOGIN"
          onPress={this._login}
          backgroundColor={Colors.PRIMARY}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  token: state.auth.token,
  loginForm: state.form.login
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: Actions.login
    },
    dispatch
  );
export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
