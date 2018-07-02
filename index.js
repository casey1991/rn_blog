import { App } from "./src/App";
import { KeepAwake, registerRootComponent } from "expo";

if (__DEV__) {
  KeepAwake.activate();
}
registerRootComponent(App);
