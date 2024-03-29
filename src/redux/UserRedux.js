import {createSlice} from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isFetching = false;
            state.error = false;
          },
        loginFailure:(state)=>{
            state.isFetching=false,
            state.error=true
        },
        logout(state) {
            state.user = null;
          },
    },
});
export const {loginStart,loginSuccess,loginFailure,logout} = UserSlice.actions
export default UserSlice.reducer;
export const LOGOUT = 'userslice/logout';