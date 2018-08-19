import { createAction } from "redux-actions";
const PREFIX = "ENTITY_";
export const Types = {
  RESET: PREFIX + "RESET",
  ADD_ENTITIES: PREFIX + "ADD_ENTITIES"
};
// normal actions
const reset = createAction(Types.RESET);
const addEntities = createAction(Types.ADD_ENTITIES);
export const Actions = {
  reset,
  addEntities
};
