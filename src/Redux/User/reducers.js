import { handleActions } from "redux-actions";
import Immutable from "seamless-immutable";
export const defaultState = Immutable({});
export default handleActions({}, defaultState);
