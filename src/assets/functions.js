const increaseProduct = (products, actionProductId) => {
  const findIndexOfProduct = products.findIndex(
    (item) => item.id === actionProductId
  );
  products[findIndexOfProduct].quantity++;
  return products;
};
const deacreseProduct = (products, actionProductId) => {
  const findIndexOfProduct = products.findIndex(
    (item) => item.id === actionProductId
  );
  if (products[findIndexOfProduct].quantity === 1) {
    products.splice(findIndexOfProduct, 1);
  } else {
    products[findIndexOfProduct].quantity--;
  }
  return products;
};
const amountCounter = (products) =>{
    const cost = products.reduce((total,item)=> total + (item.price * item.quantity),0)
    return cost

}
export {amountCounter,increaseProduct, deacreseProduct };
