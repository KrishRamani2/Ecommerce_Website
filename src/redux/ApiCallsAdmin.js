import axios from "axios";
import { getProductFailure, 
    getProductStart,
    getProductSuccess ,
    deleteProductFailure, 
    deleteProductStart,
    deleteProductSuccess,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} from "./ProductRedux";
import { loginFailure, loginSuccess , loginStart } from "./Userslice";

const publicRequest = axios.create({
    baseURL: "http://localhost:3000/api",
});

const userRequest = axios.create({
    baseURL: "http://localhost:3000/api",
    // Add any additional configuration specific to user requests, such as authentication tokens
});

const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        console.error("Login error:", error);
        dispatch(loginFailure());
    }
};

const logout = () => {
    localStorage.removeItem('username');
    return Promise.resolve();
};

const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/product");
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        console.error("Get products error:", error);
        dispatch(getProductFailure());
    }
};

const deleteProducts = async (id, dispatch) =>{
    dispatch(deleteProductStart());
    try {
        await publicRequest.delete(`/product/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (error) {
        console.error("Delete product error:", error);
        dispatch(deleteProductFailure());
    }
};

const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // Assuming you would have some logic here to update the product
        const res = await userRequest.put(`/:id`,id, product);
        dispatch(updateProductSuccess(res.data));
    } catch (error) {
        console.error("Update product error:", error);
        dispatch(updateProductFailure());
    }
};

const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product/new`, product); // Remove localhost from the URL
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Add product error:", err.response.data);
      dispatch(addProductFailure(err.response.data));
    } else if (err.request) {
      // The request was made but no response was received
      console.log("Add product error:", err.request);
      dispatch(addProductFailure("No response received from the server"));
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Add product error:", err.message);
      dispatch(addProductFailure(err.message));
    }
  }
};

export {
    login,
    logout,
    getProducts,
    deleteProducts,
    updateProduct,
    addProduct
};
