import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    console.log("home componentDidMount");
    console.log(this.props);
  }
  componentWillUnmount() {
    console.log("home componentWillUnmount");
  }
  _logout = () => {
    const { navigation } = this.props;
    navigation.navigate("AuthStack");
  };
  render() {
    return (
      <View>
        <Button onPress={this._logout} title="LOGOUT" />
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = () => ({});
export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
