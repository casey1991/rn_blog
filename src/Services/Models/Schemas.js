import { schema as Schema } from "normalizr";
const User = new Schema.Entity("user", {}, { idAttribute: "_id" });
const Message = new Schema.Entity(
  "message",
  {
    user: User
  },
  { idAttribute: "_id" }
);
const Room = new Schema.Entity(
  "room",
  {
    users: [User],
    host: User
  },
  { idAttribute: "_id" }
);
export default {
  User,
  Message,
  Room
};
