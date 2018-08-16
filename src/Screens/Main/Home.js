import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { connect } from "react-redux";
import { Actions } from "../../Redux/Article/actions";
import { HomeTabScreen } from "./Home/index";
import { styles } from "./Home.styles";

class Home extends Component {
  componentDidMount() {
    console.log("HomeScreen did mount!");
  }
  render() {
    const { createArticle } = this.props;
    return (
      <View style={[styles.layoutContainer]}>
        <HomeTabScreen />
        <View style={[styles.layoutFAB]}>
          <FloatActionButton
            onPress={() => {
              createArticle();
            }}
          />
        </View>
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
