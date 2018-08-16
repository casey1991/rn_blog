import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { Root } from "../Navigations/Root";
import { store } from "../Redux";
import { Provider as PaperProvider } from "react-native-paper";
import NavigationnServices from "../Services/NavigationServices";
import { DefaultTheme } from "react-native-paper";
import { Colors } from "../Themes";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.SECDONARY
  }
};
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.PRIMARY}
          />
          <Root
            ref={navigatorRef => {
              NavigationnServices.setTopLevelNavigator(navigatorRef);
            }}
          />
        </PaperProvider>
      </Provider>
    );
  }
}
