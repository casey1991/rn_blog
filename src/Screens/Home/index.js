import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";

class Home extends Component {
  render() {
    return (
      <View>
        <Button rounded />
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
