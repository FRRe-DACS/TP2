import axios from "axios";
 
axios.defaults.withCredential = false;
export default axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-type": "application/json",
  }
});