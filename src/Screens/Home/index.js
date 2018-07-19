import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
// import { SafeAreaView } from "react-navigation";
import { Actions } from "../../Redux/Article/actions";

class Home extends Component {
  render() {
    const { createArticle } = this.props;
    return (
      <View>
        <Button
          rounded
          title="create article"
          onPress={() => {
            createArticle();
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createArticle: Actions.create
    },
    dispatch
  );
export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
