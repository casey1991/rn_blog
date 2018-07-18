export const authMiddleware = store => next => action => {
  const { meta } = action;
  const result = null;
  if (meta && meta.auth) {
    // this action must authed, so we check store token
    const state = store.getState();
    if (state.auth.token) {
      // pass
      // maybe we should working with navigation now just pass do nothing
      next();
    } else {
      //// maybe we should working with navigation now just pass do nothing
      next();
    }
  } else {
    const result = next(action); // other actions
  }
  return result;
};
