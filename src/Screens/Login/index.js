import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";
import { LoginForm } from "../../Components/Forms/LoginForm";
import { SafeAreaView } from "react-navigation";
import { Colors } from "../../Themes";
import { login } from "../../Redux/Auth/actions";

class Login extends Component {
  _login = () => {
    const { login, loginForm } = this.props;
    login(loginForm.values);
  };
  render() {
    return (
      <SafeAreaView forceInset={{ top: "always", bottom: "always" }}>
        <LoginForm />
        <Button
          title="LOGIN"
          onPress={this._login}
          backgroundColor={Colors.PRIMARY}
        />
      </SafeAreaView>
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
      login: login
    },
    dispatch
  );
export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
