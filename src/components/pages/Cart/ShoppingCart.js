import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  increase,
  decrease,
  removeProduct,
  removeAll,
  checkoutAction,
} from "../../../Redux/Cart/ActionsCart";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const { selectProducts, amount } = state;
  const [isDisable, setIsDisable] = useState(true);
  const removeHandler = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsDisable(true);
        dispatch(removeProduct(data));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const removeAllHandler = () => {
    Swal.fire({
      title: "Are you Remove All sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAll());
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setIsDisable(true);
      }
    });
  };
  const checkoutHandler = () => {
    Swal.fire("checkout successFully.", "Thanks for buying.", "success");
    dispatch(checkoutAction());
    setIsDisable(true);
  };
  useEffect(() => {
    if (selectProducts.length) {
      setIsDisable(false);
    }
  }, [selectProducts]);
  return (
    <div className="mx-6 ">
      <section className="md:w-2/3 md:mx-auto divide-y">
        <div className="flex justify-between items-center mb-4 mt-2 ">
          <h5 className="font-bold tracking-wide">shoppingCart</h5>
          <button
            className="text-xs text-red-600 font-semibold underline tracking-wider"
            onClick={() => {
              removeAllHandler();
            }}
          >
            RemoveAll
          </button>
        </div>
        {selectProducts.length ? (
          selectProducts.map((product) => {
            return (
              <div
                className="flex items-center justify-between"
                key={product.id}
              >
                {/* image */}
                <div className="w-20 md:w-36">
                  <img src={product.url} alt={product.url} loading="lazy" />
                </div>
                {/* name */}
                <div className="font-semibold md:text-lg self-start w-32 md:w-40 md:pt-1 -ml-4 truncate">
                  {product.name}
                </div>
                {/* counter */}
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(increase(product))}
                    className="bg-gray-200 w-7 h-7 	 rounded-full"
                  >
                    +
                  </button>
                  <span className="px-2 font-semibold">{product.quantity}</span>
                  <button
                    onClick={() => dispatch(decrease(product))}
                    className="bg-gray-200 w-7 h-7 	 rounded-full"
                  >
                    -
                  </button>
                </div>
                {/* price */}
                <div className="text-sm  text-right">
                  <p className="font-semibold">${product.price}</p>
                  <button
                    onClick={() => removeHandler(product)}
                    className="text-xs text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <span className="font-medium text-gray-900">empty cart.</span>
            <Link
              to="/shop"
              className="ml-1 mb-2 inline-block font-medium rounded-md text-xs px-3 py-1.5 leading-snug	 text-center text-white  bg-blue-700 hover:bg-blue-800"
            >
              go to shop
            </Link>
          </div>
        )}
        <hr />
        <div dir="rtl" className="py-1 flex flex-col">
          <div className="w-44 flex justify-between ">
            <p className="font-bold text-lg">${state.totalPrice.toFixed(2)}</p>
            <p>items: {amount}</p>
          </div>
          <button
            onClick={checkoutHandler}
            type="submit"
            className="bg-indigo-400 disabled:hover:cursor-not-allowed disabled:bg-indigo-400/50 w-44 mt-2 rounded-xl font-semibold "
            disabled={isDisable}
          >
            checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ShoppingCart);
