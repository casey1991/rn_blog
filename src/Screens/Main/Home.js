import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { connect } from "react-redux";
import { Actions } from "../../Redux/Article/actions";
import { HomeTabScreen } from "./Home/index";
import { styles } from "./Home.styles";
import { BottomSheet } from "../../Components/Common/BottomSheet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  componentDidMount() {}
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={[styles.layoutContainer]}>
        <HomeTabScreen />
        <BottomSheet
          visible={modalVisible}
          onOuterClicked={() => {
            this.setState({
              modalVisible: false
            });
          }}
        />
        <View style={[styles.layoutFAB]}>
          <FloatActionButton
            onPress={() => {
              this.setState({
                modalVisible: true
              });
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
