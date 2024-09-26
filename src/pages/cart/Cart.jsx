import { remove } from "@/redux/slices/cart-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LuMoveLeft } from "react-icons/lu";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [cartItem, setCartItem] = useState(cart);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const updateQuantity = (id, amount, btn = true) => {
    setCartItem((prev) =>
      btn
        ? prev.map((item) =>
            item.id == id ? { ...item, quantity: item.quantity + amount } : item
          )
        : prev.map((item) =>
            item.id == id ? { ...item, quantity: amount } : item
          )
    );
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartItem));
  }, [cartItem]);

  const updateCartItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
    dispatch(remove(id));
  };

  useEffect(() => {
    const subtotal = cartItem.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotal(subtotal);
    cartItem.length <= 0 && navigate("/");
  }, [cartItem]);
  return (
    <div className="min-h-screen max-w-6xl pt-10 mx-auto">
      <p
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LuMoveLeft className="text-2xl" /> Back to shopping
      </p>
      <h1 className="my-9 text-3xl font-bold text-slate-800 font-Hammer">
        SHOPPING CART
      </h1>
      <div className="justify-center items-center px-6 mt-14 flex flex-col lg:flex-row md:space-x-6 xl:px-0">
        <div className="rounded-lg lg:w-2/3">
          <div className="info flex items-center justify-between text-xl px-4 py-3 border-t-2 border-b-2 border-dashed border-slate-900">
            <h4 className="">Product</h4>
            <div className="flex items-center justify-between gap-8">
              <h4>Quantity</h4>
              <h4>Price</h4>
            </div>
          </div>
          {cartItem?.map((item) => {
            return (
              <div
                key={item.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.image_url}
                  alt="product-image"
                  className="w-full max-h-20 object-contain rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.name}
                    </h2>
                    <p
                      className="mt-1 text-xs text-gray-700 line-clamp-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    ></p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <button
                        disabled={item.quantity <= 1}
                        onClick={() => updateQuantity(item.id, -1)}
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        className="h-8 min-w-4 max-w-9  border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(item._id, e.target.value, false)
                        }
                      />
                      <span
                        onClick={() => updateQuantity(item.id, +1)}
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{item.price}$</p>
                      <svg
                        onClick={() => {
                          updateCartItem(item.id);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- Sub total --> */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 w-3/4 lg:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{total}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">{total} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
