import React, { Component } from "react";
import ApolloClient, { HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { store } from "../../Redux";
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  request: operation => {
    const token = store.getState().auth.token;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});
export default class Graphql extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
    );
  }
}
