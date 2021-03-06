import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Icon } from "react-native-elements";
import { LoginForm } from "../../Components/Forms/LoginForm";
import { Colors } from "../../Themes";
import { Actions } from "../../Redux/Auth/actions";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarAction } from "../../Components/Toolbars/ToolbarAction";
import { styles } from "./index.styles";

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <Toolbar>
        <ToolbarAction
          dark
          icon={"close"}
          onPress={() => {
            navigation.goBack(null);
          }}
        />
      </Toolbar>
    )
  });
  componentDidMount() {}
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
      <View style={[styles.container]}>
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
