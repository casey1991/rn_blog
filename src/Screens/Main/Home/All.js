import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { Button } from "../../../Components/Common/Button/Button";
import { FloatActionButton } from "../../../Components/Common/Button/FloatActionButton";
import { Toolbar } from "../../../Components/Toolbars/Toolbar";
import { ToolbarContent } from "../../../Components/Toolbars/ToolbarContent";
import { connect } from "react-redux";
import { Actions } from "../../../Redux/Article/actions";
import { Text } from "../../../Components/Common/Text";
import { styles } from "../Home.styles";

class HomeAll extends Component {
  static navigationOptions = () => ({
    header: () => (
      <Toolbar>
        <ToolbarContent title="Home" titleStyle={[styles.toolbarTitle]} />
      </Toolbar>
    )
  });
  componentDidMount() {
    console.log("HomeScreen did mount!");
  }
  render() {
    const { createArticle } = this.props;
    return (
      <View style={[styles.layoutContainer]}>
        <Text>All</Text>
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
export const HomeAllScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeAll);
