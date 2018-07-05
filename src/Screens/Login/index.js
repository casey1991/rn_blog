import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { LoginForm } from "../../Components/Forms/LoginForm";
import { SafeAreaView } from "react-navigation";
import { Colors } from "../../Themes";

class Login extends Component {
  _login = () => {
    const { navigation } = this.props;
    navigation.navigate("AppStack");
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
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = () => ({});
export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
