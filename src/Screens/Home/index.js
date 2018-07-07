import React, { Component } from "react";
import { Button } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";

class Home extends Component {
  render() {
    return <SafeAreaView forceInset={{ top: "always" }} />;
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = () => ({});
export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
