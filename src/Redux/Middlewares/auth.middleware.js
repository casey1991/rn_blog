import NavigationServices from "../../Services/NavigationServices";
export const authMiddleware = store => next => action => {
  const { meta } = action;
  let result = null;
  if (meta && meta.auth) {
    // this action must authed, so we check store token
    const state = store.getState();
    if (state.auth.token) {
      // pass
      // maybe we should working with navigation ,now just pass do nothing
      result = next(action);
    } else {
      //// maybe we should working with navigation ,now just pass do nothing
      result = NavigationServices.navigate("Login");
    }
  } else {
    result = next(action); // other actions
  }
  return result;
};
