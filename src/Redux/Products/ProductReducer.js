import { ProductsData } from "../../Shared/ProductsData";

const initialState = {
  ProductsData: ProductsData,
  selectProduct: {},
  filterProduct: ProductsData,
  searchSuggestions: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        filterProduct: [...state.ProductsData],
      };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectProduct: action.payload,
      };
    case "FILTER_PRODUCT":
      const filter = state.ProductsData.filter(
        (product) => product.category === action.category
      );
      return {
        ...state,
        filterProduct: [...filter],
      };
    case "FILTER_PRODUCT_GENDER":
      const filterGender = state.ProductsData.filter(
        (product) => product.gender === action.gender
      );
      return {
        ...state,
        filterProduct: [...filterGender],
      };
    case "SEARCH_SUGGESTIONS":
      const searchSuggestions = state.ProductsData.filter((product) =>
        product.name.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        searchSuggestions: [...searchSuggestions],
      };
    default:
      return state;
  }
};

export default ProductReducer;
