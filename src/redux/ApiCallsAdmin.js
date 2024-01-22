import publicRequest from "../../Requestmethod";
import { loginFailure, loginSuccess , loginStart } from "./Userslice";

 const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

 const logout = () => {
    // Clear user session (assuming you store user data in localStorage)
    localStorage.removeItem('username');
  
    // You may need additional logic like clearing cookies, revoking tokens, etc.
  
    // Return a promise to handle asynchronous tasks if needed
    return Promise.resolve();
  };
export default login
export {logout}