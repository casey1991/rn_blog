import Development from "./development";
import Production from "./development";
export const getConfig = () => {
  if (process.env.NODE_ENV === "development") {
    return Development;
  }
  return Production;
};
