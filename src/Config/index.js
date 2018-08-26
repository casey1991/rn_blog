import Development from "./development";
import Production from "./development";
export const getConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return Production;
  }
  return Development;
};
