import axios from "axios";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_IRL,
  });
  return instance;
}
export const baseInstance = createInstance();
