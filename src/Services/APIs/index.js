import { create } from "apisauce";
import { store } from "../../Redux/index";

export const api = create({
  baseURL: "http://localhost:3000"
});

api.addRequestTransform(request => {
  if (store.getState().auth.token) {
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token;
  }
});
