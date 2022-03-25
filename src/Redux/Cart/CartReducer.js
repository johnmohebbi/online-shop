import { increaseProduct, deacreseProduct,amountCounter } from "../../assets/functions";
const initialState = {
  selectProducts: [],
  amount:0,
  totalPrice: 0,
  checkout:false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let isProduct = !!state.selectProducts.find(
        (product) => product.id === action.payload.id
      );
      if (!isProduct) {
        state.selectProducts.push({ ...action.payload, quantity: 1 });
        return {
          ...state,
          checkout:false,
          selectProducts: state.selectProducts,
          totalPrice:amountCounter(state.selectProducts)
        };
      }
      return {
        ...state,
        checkout:false,
        selectProducts: increaseProduct(
          state.selectProducts,
          action.payload.id
        ),
        totalPrice:amountCounter(state.selectProducts)

      };
    case "INCREASE":
      return {
        ...state,
        selectProducts: increaseProduct(
          state.selectProducts,
          action.payload.id
        ),
        totalPrice:amountCounter(state.selectProducts)

      };
    case "DECREASE":
      return {
        ...state,
        selectProducts: deacreseProduct(
          state.selectProducts,
          action.payload.id
        ),
        totalPrice:amountCounter(state.selectProducts)

      };
    case "REMOVE_PRODUCT":
      const filter = state.selectProducts.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectProducts: filter,
        totalPrice:amountCounter(filter)

      };
    case "REMOVE_ALL":
      return {
        selectProducts: [],
        amount: 0,
        totalPrice: 0,
      };
      case "CHECKOUT":
      return {
        selectProducts: [],
        amount: 0,
        totalPrice: 0,
        checkout:true,
      };
    default:
      return state;
  }
};

export default CartReducer;
