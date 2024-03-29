import * as types from '../actions/orderTypes';

// Initial state for orders
const initialState = {
  loading: false,
  error: null,
};

// Order reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
