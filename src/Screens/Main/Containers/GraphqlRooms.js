/* @flow */

import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";
import { ListItem } from "../../../Components/Common/ListItem/ListItem";
import ggl from "graphql-tag";
import { Query } from "react-apollo";

export class GraphqlRooms extends Component {
  static propTypes = {
    onRoomSelected: PropTypes.func
  };
  static defaultProps = {
    onRoomSelected: () => {}
  };
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
    const { onRoomSelected } = this.props;
    return (
      <ListItem
        title={item.name}
        onPress={() => {
          onRoomSelected(item.id);
        }}
      />
    );
  };
  _keyExtractor = (item, index) => {
    return item.id;
  };
  render() {
    return (
      <Query query={this._getRooms} pollInterval={500}>
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
