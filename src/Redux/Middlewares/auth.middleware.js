import NavigationServices from "../../Services/NavigationServices";
export const authMiddleware = store => next => action => {
  const { meta } = action;
  let result = false;
  if (meta && meta.auth) {
    const state = store.getState();
    if (state.auth.token) {
      result = next(action);
    } else {
      result = NavigationServices.navigate("AuthStack");
    }
  } else {
    result = next(action);
  }
  return result;
};
