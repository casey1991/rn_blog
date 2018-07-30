import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { Button } from "../../Components/Common/Button/Button";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { Searchbar } from "../../Components/Searchbar/Searchbar";
import { connect } from "react-redux";
// import { SafeAreaView } from "react-navigation";
import { Actions } from "../../Redux/Article/actions";

class Home extends Component {
  static navigationOptions = () => ({
    header: () => <Searchbar />
  });
  render() {
    const { createArticle, navigation } = this.props;
    return (
      <View>
        <Button
          raised={false}
          onPress={() => {
            navigation.navigate("ArticleStack");
          }}
        >
          Article One
        </Button>
        <FloatActionButton
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
