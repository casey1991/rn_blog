import { createStackNavigator } from "react-navigation";
import { ArticleDetailScreen } from "../Screens/Article";
export const ArticleStack = createStackNavigator({
  Detail: ArticleDetailScreen
});
