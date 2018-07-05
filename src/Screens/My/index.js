import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Colors } from "../../Themes";

class My extends Component {
  _logout = () => {
    const { navigation } = this.props;
    navigation.navigate("AuthStack");
  };
  render() {
    return (
      <SafeAreaView forceInset={{ top: "always", bottom: "always" }}>
        <Button
          title="LOGOUT"
          onPress={this._logout}
          backgroundColor={Colors.PRIMARY}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = () => ({});
export const MyScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(My);
