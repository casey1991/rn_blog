import messageTypes from "../../Styles/Constants";
import Location from "./Location";
import Text from "./Text";
import Image from "./Image";
import Voice from "./Voice";
import File from "./File";
export default function getMessageContentHelper(
  type = messageTypes.MESSAGE_TYPE_TEXT
) {
  switch (type) {
    case messageTypes.MESSAGE_TYPE_TEXT:
      return Text;
    case messageTypes.MESSAGE_TYPE_LOCATIONN:
      return Location;
    case messageTypes.MESSAGE_TYPE_IMAGE:
      return Image;
    case messageTypes.MESSAGE_TYPE_VOICE:
      return Voice;
    case messageTypes.MESSAGE_TYPE_FILE:
      return File;
  }
}
