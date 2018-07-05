import { api } from "../APIs/index";
const login = async payload => {
  const response = await api.post("auth/token", payload);
  return response;
};

export default {
  login
};
