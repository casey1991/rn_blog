import { create } from "apisauce";
import { store } from "../../Redux/index";

export const api = create({
  // baseURL: "http://10.30.15.37:3000"
  baseURL: "http://192.168.1.101:3000"
});

api.addRequestTransform(request => {
  if (store.getState().auth.token) {
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token;
  }
});
