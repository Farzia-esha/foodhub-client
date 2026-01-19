import axios from "axios";

const instance = axios.create({
  baseURL: `https://project-server-two-delta.vercel.app`,
});

export default instance;
