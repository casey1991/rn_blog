import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { Button } from "../../Components/Common/Button/Button";
import { FloatActionButton } from "../../Components/Common/Button/FloatActionButton";
import { Toolbar } from "../../Components/Toolbars/Toolbar";
import { Searchbar } from "../../Components/Searchbar/Searchbar";
import { connect } from "react-redux";
import { Actions } from "../../Redux/Article/actions";
import { Text } from "../../Components/Common/Text";
import { styles } from "./Home.styles";

class Search extends Component {
  static navigationOptions = () => ({
    header: () => <Searchbar />
  });
  componentDidMount() {
    console.log("HomeScreen did mount!");
  }
  render() {
    const { createArticle, navigation } = this.props;
    return (
      <View style={[styles.layoutContainer]}>
        <Button
          raised={false}
          onPress={() => {
            navigation.navigate("ArticleStack");
          }}
        >
          Article One
        </Button>
        <View style={[styles.layoutFAB]}>
          <FloatActionButton
            onPress={() => {
              createArticle();
            }}
          />
        </View>
        <Text>
          custom custom
          {/* custom custom custom custom custom custom custom custom */}
          {/* custom custom custom custom custom custom custom custom custom custom */}
          {/* custom custom custom custom custom custom custom custom custom custom */}
          {/* custom custom */}
        </Text>
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
export const SearchScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
