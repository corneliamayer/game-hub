import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_IO_API_KEY
  }
});

export { CanceledError };