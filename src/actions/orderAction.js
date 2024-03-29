import * as types from './orderTypes';

// Action creator to add an order
export const addOrderRequest = (orderData) => ({
  type: types.ADD_ORDER_REQUEST,
  payload: orderData,
});

export const addOrderSuccess = () => ({
  type: types.ADD_ORDER_SUCCESS,
});

export const addOrderFailure = (error) => ({
  type: types.ADD_ORDER_FAILURE,
  payload: error,
});
