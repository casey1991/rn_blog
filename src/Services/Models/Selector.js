import { normalize, denormalize } from "normalizr";
import Schemas from "./Schemas";
import * as _ from "lodash";
const hydrateEntities = (state, ids, schema) => {
  const result = denormalize(
    { data: ids },
    { data: [schemaHelper(schema)] },
    state.entity
  );
  return _.compact(result.data);
};
const hydrateEntity = (state, id, schema) => {
  const result = denormalize(
    { data: id },
    { data: schemaHelper(schema) },
    state.entity
  );
  return result.data;
};
const schemaHelper = string => {
  return Schemas[string];
};
export default {
  normalize,
  denormalize,
  hydrateEntities,
  hydrateEntity,
  schemaHelper
};
