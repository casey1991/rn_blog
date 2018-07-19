import { api } from "../APIs/index";
const create = async payload => {
  //   const response = await api.post("auth/token", payload);
  //   return response;
  // do nothing now we just test authmiddleware just return object
  return { ok: true, data: {} };
};
export default {
  create
};
