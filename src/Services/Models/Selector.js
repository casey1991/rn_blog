import { normalize, denormalize } from "normalizr";
import Schemas from "./Schemas";
import * as _ from "lodash";
const hydrate = (state, id) => {
  const result = denormalize(
    { rooms: id },
    { rooms: [Schemas.Room] },
    state.entity
  );
  return _.compact(result.rooms);
};
export default { normalize, denormalize, hydrate };
