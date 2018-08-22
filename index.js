import { App } from "./src/App";
import { YellowBox } from "react-native";
import { KeepAwake, registerRootComponent } from "expo";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(App);
