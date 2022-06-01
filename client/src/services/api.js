import axios from "axios";

const api = axios.create({
  baseURL: "http://labens.dct.ufrn.br/sigcli-server",
});

export default api;