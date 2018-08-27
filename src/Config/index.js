import Development from "./development";
import Production from "./production";
export const getConfig = () => {
  if (process.env.RN_ENV === "development") {
    return Development;
  }
  return Production;
};
