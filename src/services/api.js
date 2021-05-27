import axios from "axios";
export default class BaseHttpService {
  constructor() {
    axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com";
  }
  searchProduct = (values) => {
    const { data } = axios.get(`/product?search=${values}`);
    return data;
  };

  get(str) {
    str = "hello";
    console.log(str);
  }
}
