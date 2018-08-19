import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View } from "react-native";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { ToolbarBackAction } from "../../Components/Toolbars/ToolbarBackAction";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { Actions } from "../../Redux/Article/actions";

class ArticleDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <Toolbar>
        <ToolbarBackAction
          dark
          onPress={() => {
            navigation.goBack(null);
          }}
        />
      </Toolbar>
    )
  });
  componentDidMount() {}
  render() {
    const { createArticle } = this.props;
    return (
      <View>
        <FloatActionButton
          onPress={() => {
            createArticle();
          }}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createArticle: Actions.create
    },
    dispatch
  );
export const ArticleDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
