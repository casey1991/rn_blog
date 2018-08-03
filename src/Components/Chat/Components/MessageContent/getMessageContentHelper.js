import MessageTypes from "../../constants";
import Location from "./Location";
import Text from "./Text";
import Image from "./Image";
import Voice from "./Voice";
import File from "./File";
export default function getMessageContentHelper(
  type = MessageTypes.MESSAGE_TYPE_TEXT
) {
  switch (type) {
    case MessageTypes.MESSAGE_TYPE_TEXT:
      return Text;
    case MessageTypes.MESSAGE_TYPE_LOCATIONN:
      return Location;
    case MessageTypes.MESSAGE_TYPE_IMAGE:
      return Image;
    case MessageTypes.MESSAGE_TYPE_VOICE:
      return Voice;
    case MessageTypes.MESSAGE_TYPE_FILE:
      return File;
  }
}
