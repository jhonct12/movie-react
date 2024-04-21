import { TOKEN_API } from "./constansts";

export const optionsGet = {
  method: "GET",
  headers: {
    Authorization: TOKEN_API,
    accept: "application/json",
  },
};
