import axios from "axios";
import { store } from "../redux/store";
export default class BaseHttpService {
  http;
  constructor() {
    console.log(store.getState().authorization.tokens.accessToken);
    this.http = axios.create({
      baseURL: "https://slimmom-backend.herokuapp.com",
      headers: {
        Authorization: `Bearer ${
          store.getState().authorization.tokens.accessToken
        }`,
      },
    });
  }
  searchProduct = async (values) => {
    const data = await this.http.get(`/product?search=${values}`);
    return data;
  };
  login = async (values) => {
    const data = await this.http.post(`/auth/login`, values);
    this.http.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
    return data;
  };
  register = async (values) => {
    const data = await this.http.post(`/auth/register`, values);
    this.http.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
    return data;
  };

  getUserInfo = async () => {
    this.http.defaults.headers.Authorization = `Bearer ${
      store.getState().authorization.tokens.accessToken
    }`;
    return await this.http.get(`/user`);
  };
}
