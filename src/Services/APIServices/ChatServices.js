import { api } from "../APIs/index";
const getRooms = async payload => {
  return await api.get("chat-room/rooms");
};
const sendMessage = async payload => {
  return { ok: true };
};
const getMessages = async payload => {};
export default {
  getRooms,
  sendMessage,
  getMessages
};
