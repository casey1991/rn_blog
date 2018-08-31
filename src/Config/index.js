import Development from "./development";
import Production from "./production";
export const getConfig = () => {
  return Development;
  if (process.env.RN_ENV === "development") {
    return Development;
  }
  return Production;
};
