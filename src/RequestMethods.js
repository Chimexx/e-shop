import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODE1NDg4MTU0NjhlZjA0ZGI5YTFiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTk3MTMxMiwiZXhwIjoxNjM2MjMwNTEyfQ.oYxMyX38xkGcrzDlETOqdBAAWWYpu49j6qMO8XJzN5w";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { TOKEN: `Bearer ${TOKEN}` },
});
