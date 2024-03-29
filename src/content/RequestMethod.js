import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE4NTRmNTU4Nzc3NzI0YzBlZjFkOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzI1NzM2OSwiZXhwIjoxNzAzNTE2NTY5fQ.oV9rQdFwT2UIlYhVs1xlDAs6Yg08UPfecy3NSi-MomM";


 const publicRequest = axios.create({
    baseURL:BASE_URL,
});

 const userRequest = axios.create({
    baseUrl:BASE_URL,
    headers:{token:`Bearer ${Token}`},
});

export default publicRequest;
export {userRequest};