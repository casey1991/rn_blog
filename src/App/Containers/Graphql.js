import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from "apollo-link-ws";
import { store } from "../../Redux";
import { getConfig } from "../../Config";
export default class Graphql extends Component {
  constructor(props) {
    super(props);
    this._authLink = setContext((_, { headers }) => {
      const token = store.getState().auth.token;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ""
        }
      };
    });
    this._httpLink = new HttpLink({
      uri: getConfig().API_URL + "/graphql"
    });
    this._wsLink = new WebSocketLink({
      uri: getConfig().API_URL + "/graphql",
      options: {
        reconnect: true,
        connectionParams: () => {
          const token = store.getState().auth.token;
          return { token: token ? token : "" };
        }
      }
    });
    this._wsLink.subscriptionClient;
    this._splitLink = split(
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      this._wsLink,
      this._httpLink
    );
    this._errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    this._client = new ApolloClient({
      link: this._authLink.concat(this._errorLink).concat(this._splitLink),
      cache: new InMemoryCache()
    });
  }
  render() {
    return (
      <ApolloProvider client={this._client}>
        {this.props.children}
      </ApolloProvider>
    );
  }
}
