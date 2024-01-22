import publicRequest from "../content/RequestMethod";
import { loginFailure, loginSuccess , loginStart } from "./UserRedux";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}