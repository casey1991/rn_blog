import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { MapView } from "expo";
import Title from "../Text/Primary";
import Description from "../Text/Secondary";
import PropTypes from "prop-types";
import { Dimensions } from "../../Themes";
class Location extends Component {
  static propTypes = {
    currentMessage: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    region: PropTypes.object
  };
  renderTitle = () => {
    return <Title text="Title" />;
  };
  renderDescription = () => {
    return <Description text="Description" />;
  };
  render() {
    return (
      <View style={[styles.layoutContainer]}>
        <View style={[styles.layoutInfomations]}>
          {this.renderTitle()}
          {this.renderDescription()}
        </View>
        <View style={[styles.layoutMapView]}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            zoomEnabled={false}
            rotateEnabled={false}
            scrollEnabled={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  layoutContainer: {
    flexDirection: "column",
    width: Dimensions.LOCATION_WIDTH,
    borderRadius: Dimensions.COMMON_BORDER_RADIUS,
    borderWidth: Dimensions.COMMON_BORDER_WIDTH,
    borderColor: "transparent"
  },
  layoutInfomations: {
    flexDirection: "column",
    padding: Dimensions.COMMON_INNER_PADDING,
    backgroundColor: "#fff"
  },
  layoutMapView: {
    width: "100%",
    height: Dimensions.LOCATION_MAPVIEW_HEIGHT,
    backgroundColor: "#ccc"
  }
});
export default Location;
