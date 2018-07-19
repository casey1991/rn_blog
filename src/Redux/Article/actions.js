import { createAction } from "redux-actions";
const PREFIX = "ARTICLE_";
export const Types = {
  RESET: PREFIX + "RESET",
  CREATE: PREFIX + "CREATE"
};
// normal actions
const reset = createAction(Types.RESET);
// saga actions
const create = createAction(
  Types.CREATE,
  updates => updates,
  () => ({ auth: true }) // this action must auth
);
export const Actions = {
  reset,
  create
};
