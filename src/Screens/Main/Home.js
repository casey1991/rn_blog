import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { connect } from "react-redux";
import { Actions } from "../../Redux/Article/actions";
import { styles } from "./Home.styles";
import { BottomSheet } from "../../Components/Common/BottomSheet";
import { GraphqlGoods } from "./Containers/GraphqlGoodss";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../Components/Toolbars/ToolbarContent";
class Home extends Component {
  static navigationOptions = () => ({
    header: () => (
      <Toolbar>
        <ToolbarContent title="Home" titleStyle={[styles.toolbarTitle]} />
      </Toolbar>
    )
  });
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={[styles.layoutContainer]}>
        <View style={{ flex: 1 }}>
          <GraphqlGoods />
        </View>
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
