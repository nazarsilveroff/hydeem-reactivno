import axios from "axios";
import { store } from "../redux/store";
export default class BaseHttpService {
  http;
  constructor() {
    this.http = axios.create({
      baseURL: "https://slimmom-backend.goit.global",
      headers: {
        Authorization: `Bearer ${
          store.getState().authorization.tokens.accessToken
        }`,
      },
    });
  }

  get accessToken() {
    return store.getState().authorization.tokens.accessToken;
  }

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
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    return await this.http.get(`/user`);
  };

  searchProduct = async (values) => {
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    return await this.http.get(`/product?search=${values}`);
  };

  addEatenProduct = async (product) => {
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    return await this.http.post("/day", product);
  };

  delleteEatenProduct = async (product) => {
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    return await this.http.delete("/day", { data: product });
  };

  getDailyRate = async (userCharacteristics, id) => {
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    if (id) {
      return await this.http.post(`/daily-rate/${id}`, userCharacteristics);
    } else {
      return await this.http.post("/daily-rate", userCharacteristics);
    }
  };

  getSummaryForDayData = async (value) => {
    this.http.defaults.headers.Authorization = `Bearer ${this.accessToken}`;
    return await this.http.post(`/day/info`, value);
  };
}
