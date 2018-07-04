import React, { Component } from "react";
import { Provider } from "react-redux";
import { Root } from "../Navigations/Root";
import { store } from "../Redux";
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
