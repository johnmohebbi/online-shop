const addTOCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
const removeProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
const increase = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};
const decrease = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};
const checkoutAction = () => {
  return {
    type: "CHECKOUT",
  };
};
export { addTOCart, removeAll, checkoutAction, removeProduct, increase, decrease };
