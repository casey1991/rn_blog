import { MESSAGE_TYPE_TEXT, MESSAGE_STATUS_SENDING } from "./constants";
export function isSameUser(currentMessage = {}, diffMessage = {}) {
  return !!(
    diffMessage.user &&
    currentMessage.user &&
    diffMessage.user._id === currentMessage.user._id
  );
}
export const idGenerator = function() {
  return (
    "CHAT_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
export class MessageBuilder {
  constructor() {
    this.type = MESSAGE_TYPE_TEXT;
    this.createAt = new Date();
    this.status = MESSAGE_STATUS_SENDING;
    this._id = idGenerator();
  }
  setId(id) {
    this._id = id;
    return this;
  }
  setText(text) {
    this.text = text;
    return this;
  }
  setData(data) {
    this.data = data;
    return this;
  }
  setType(type) {
    this.type = type;
    return this;
  }
  setStatus(status) {
    this.status = status;
    return this;
  }
  setUser(user) {
    this.user = user;
    return this;
  }
  setCreateAt(createAt) {
    this.createAt = createAt;
    return this;
  }
  build() {
    if (!this.user) {
      throw new Error("user not exited!");
    }
    return {
      _id: this._id,
      text: this.text,
      data: this.data,
      type: this.type,
      user: this.user,
      status: this.status,
      createAt: this.createAt
    };
  }
}
export default {
  isSameUser,
  MessageBuilder
};
