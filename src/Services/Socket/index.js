import { SocketManager } from "./SocketManager";
const config = {
  url: "http://localhost:3000",
  options: {},
  namespace: ["CHAT"]
};
export const socketManager = new SocketManager(config);
