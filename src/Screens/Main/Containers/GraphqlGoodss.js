/* @flow */

import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import ggl from "graphql-tag";
import { Query } from "react-apollo";
import { ListItem } from "../../../Components/Common/ListItem/ListItem";

export class GraphqlGoods extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this._getGoods = ggl`
    {
        goodss{
            id
            name
            price
            amount
            type
        }
    }`;
  }
  _renderItem = ({ item }) => {
    return <ListItem title={item.name} />;
  };
  _keyExtractor = (item, index) => {
    return item.id;
  };
  render() {
    return (
      <Query query={this._getGoods} pollInterval={500}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <FlatList
              data={data.goodss}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          );
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
