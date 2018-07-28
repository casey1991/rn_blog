import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Searchbar as PSearchbar } from "react-native-paper";
import { SafeAreaView } from "react-navigation";
import { styles, statusBarBackgroundColor } from "./Searchbar.styles";

export class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView forceInset={{ top: "always" }} style={[styles.container]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={statusBarBackgroundColor}
        />
        <PSearchbar style={[styles.layoutSearchbar]} />
      </SafeAreaView>
    );
  }
}
