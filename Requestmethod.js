import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const Token = "JSON.parse(JSON.parse(localStorage.getItem(persist:root)).currentUser).accessToken";
 const publicRequest = axios.create({
    baseURL:"http://localhost:3000/api/",
});
 const userRequest = axios.create({
    baseUrl:BASE_URL,
});
export default publicRequest;
export {userRequest};