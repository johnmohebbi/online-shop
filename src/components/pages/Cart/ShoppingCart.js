import React from "react";
import Swal from "sweetalert2";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  increase,
  decrease,
  removeProduct,
  removeAll,
} from "../../../Redux/Cart/ActionsCart";
const ShoppingCart = () => {
  const removeHandler = (data) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result)
        dispatch(removeProduct(data))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };
  const removeAllHandler = ()=>{
    Swal.fire({
      title: 'Are you Remove All sure ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAll())
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const { selectProducts } = state;
  return (
    <div className="mx-6">
      <div className="flex justify-between items-center mb-4 mt-2">
        <h5 className="font-bold tracking-wide">shoppingCart</h5>
        <button
          className="text-xs text-red-600 font-semibold underline tracking-wider"
          onClick={()=>{removeAllHandler()}}
        >
          RemoveAll
        </button>
      </div>
      {selectProducts.length
        ? selectProducts.map((product) => {
            return (
              <div
                className="flex items-center justify-between"
                key={product.id}
              >
                {/* image */}
                <div className="w-20">
                  <img src={product.url} alt={product.url} />
                </div>
                {/* name */}
                <div className="font-semibold self-start w-32 -ml-4 truncate">
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
                    onClick={()=>removeHandler(product)}
                    className="text-xs text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })
        : "empty cart"}
      <hr />
      <div dir="rtl" className="py-1 flex flex-col">
        <div className="w-44 flex justify-between ">
          <p className="font-bold text-lg">${state.totalPrice.toFixed(2)}</p>
          <p>items: 2</p>
        </div>
        <button
        
          type="submit"
          className="bg-indigo-400 disabled:bg-indigo-400/50 w-44 mt-2 rounded-xl font-semibold "
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
