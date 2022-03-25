const selectProduct = (product) => {
  return {
    type: "SELECT_PRODUCT",
    payload: product,
  };
};
const filterProduct = (productCategory) => {
  return {
    type: "FILTER_PRODUCT",
    category: productCategory,
  };
};
const filterProductGender = (gender) => {
  return {
    type: "FILTER_PRODUCT_GENDER",
    gender,
  };
};
const allProducts = () => {
  return {
    type: "ALL_PRODUCTS",
  };
};
const searchAction = (searchValue) => {
  return {
    type: "SEARCH_SUGGESTIONS",
    payload: searchValue,
  };
};
export { selectProduct, filterProduct, filterProductGender, allProducts,searchAction };
