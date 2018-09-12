/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListItem } from "../../../Components/Common/ListItem/ListItem";
import ggl from "graphql-tag";
import { Query } from "react-apollo";

export class GraphqlRooms extends Component {
  constructor(props) {
    super(props);
    this._getRooms = ggl`
    {
      rooms{
        id
        name
      }
    }`;
  }
  _renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        onPress={() => {
          setSelectedRoom(item._id);
          navigate("ChatStack");
        }}
      />
    );
  };
  _keyExtractor = (item, index) => {
    return index + "";
  };
  render() {
    return (
      <Query query={this._getRooms}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <FlatList
              data={data.rooms}
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
