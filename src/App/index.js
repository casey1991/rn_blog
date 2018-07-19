import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "../Navigations/Root";
import { store } from "../Redux";
import NavigationnServices from "../Services/NavigationServices";
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root
          ref={navigatorRef => {
            NavigationnServices.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
