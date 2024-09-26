import { useGetProductQuery } from "@/redux/api/proucts";
import React, { useState } from "react";

import { IoMdStarOutline } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add } from "@/redux/slices/cart-slice";

const Product = () => {
  const { data } = useGetProductQuery({ id: 1 });
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <section className="product wrapper">
      <div className="product__info my-10">
        <p className="flex gap-2">
          <span>Products</span> / <span>Gaming Headsets& Audio</span> /
          <span>Astro A50 X Wireless Headset</span>
        </p>
      </div>
      <div className="product__main flex justify-between">
        <div className="product__main--img md:w-2/4">
          <img src={data?.image_url} alt="" />
        </div>
        <div className="product__main--info md:w-2/4">
          <h2 className="text-5xl font-Hammer">{data?.name}</h2>
          <div className="mt-3 grid">
            <p className="line-clamp-1 font-Readex">{data?.description}</p>
            <div className="stars mt-2 text-[#FFC700] flex items-center gap-1 text-xl">
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <IoMdStarOutline />
              <p className="text-sm text-black">({data?.rating_counts})</p>
            </div>
            <hr className="border-dashed border-black my-5" />
            <h2 className="text-3xl mt-1 font-Readex font-semibold">
              ${data?.price} or ${data?.price / 4}/month
            </h2>
            <p className="font-Readex my-3">
              Suggested payments with 6 month special financing
            </p>
            <hr className="border-dashed border-black my-5" />
            <h2 className="text-2xl mt-1 font-Readex">Choose color</h2>
            <div className="flex gap-2 mt-4">
              {data?.color_options.map((item) => (
                <div
                  className="w-14 h-14 rounded-full border-2"
                  style={{ backgroundColor: item }}
                ></div>
              ))}
            </div>
            <hr className="border-dashed border-black my-5" />
            <div className="quantity flex items-center gap-10 mt-3">
              <div className="counter border-2 border-green-600 bg-slate-100 text-center flex items-center justify-center rounded-full">
                <button
                  onClick={() => setQuantity((p) => p - 1)}
                  disabled={quantity <= 1}
                  className="text-2xl w-16 h-14 hover:bg-slate-200 duration-200 rounded-full"
                >
                  -
                </button>
                <h2 className="text-2xl mt-1 font-Readex w-7">{quantity}</h2>
                <button
                  onClick={() => setQuantity((p) => p + 1)}
                  className="text-2xl w-16 h-14 hover:bg-slate-200 duration-200 rounded-full"
                >
                  +
                </button>
              </div>
              <p className="w-[11rem] text-base leading-5 font-[600]">
                Only <span className="text-[#0BA42D]">16 items left!</span>{" "}
                Don’t miss it{" "}
              </p>
            </div>
            <div className="add my-8 flex items-center justify-center gap-3">
              <button
                onClick={() => dispatch(add(data))}
                className="bg-green-500 border-2 border-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center justify-center gap-2"
              >
                <BsCart2 /> Add to Cart
              </button>
              <button className="px-4 h-full hover:bg-red-100 duration-200 hover:text-red-500 hover:border-transparent border-2 border-black rounded-md flex items-center justify-center gap-2">
                <FaRegHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
