import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-4 border-2 border-transparent hover:border-slate-400 hover:shadow-md duration-200">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-52 object-contain mt-2"
      />
      <Link to={`/products/${product.id}`}>
        <h3 className="font-bold text-lg mt-4">{product.name}</h3>
      </Link>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex space-x-2 mt-2">
        {product.color_options.map((color, index) => (
          <span
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </div>
      <p className="font-bold text-xl mt-2">${product.price.toFixed(2)}</p>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-600 flex items-center justify-center gap-2">
        <IoCartOutline /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
