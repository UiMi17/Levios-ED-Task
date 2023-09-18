import axios from "axios";

axios.defaults.baseURL = "https://6508107256db83a34d9bae62.mockapi.io";

export const fetchProducts = async () => {
  try {
    const data = await axios.get("/products");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
