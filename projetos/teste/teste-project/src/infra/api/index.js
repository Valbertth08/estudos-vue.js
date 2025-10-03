import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8086',
  timeout: 9000,
});

export { api }
