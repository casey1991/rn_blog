import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import { LoginForm } from "../../Components/Forms/LoginForm";

class Login extends Component {
  componentDidMount() {
    console.log("login componentDidMount");
    console.log(this.props);
  }
  componentWillUnmount() {
    console.log("login componentWillUnmount");
  }
  _login = () => {
    const { navigation } = this.props;
    navigation.navigate("AppStack");
  };
  render() {
    return (
      <View>
        <LoginForm />
        <Button title="LOGIN" onPress={this._login} />
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = () => ({});
export const LoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
