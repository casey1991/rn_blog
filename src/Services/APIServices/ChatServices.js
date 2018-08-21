import { api } from "../APIs/index";
const getRooms = async payload => {
  return await api.get("chat-room/rooms");
};

const getMessages = async payload => {
  return await api.get(
    `chat-message/messages?room=${payload.room}&limit=${payload.limit}&offset=${
      payload.offset
    }`
  );
};
const sendMessage = async payload => {
  return await api.post(`chat-message`, payload);
};
export default {
  getRooms,
  sendMessage,
  getMessages
};
