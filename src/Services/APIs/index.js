import { create } from "apisauce";
import { store } from "../../Redux/index";
import { getConfig } from "../../Config";
export const api = create({
  baseURL: getConfig().API_URL
});

api.addRequestTransform(request => {
  if (store.getState().auth.token) {
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token;
  }
});
api.addResponseTransform(response => {
  console.log(response);
});
