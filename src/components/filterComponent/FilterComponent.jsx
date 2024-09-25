import React, { useRef, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const FilterComponent = ({ brands, colors, onBrandChange, onColorChange }) => {
  const [expand, setExpand] = useState({
    brands: false,
    colors: false,
  });

  const brandsContainer = useRef();
  const colorsContainer = useRef();

  const brandStyles = {
    height: expand.brands
      ? `${brandsContainer?.current?.scrollHeight}px`
      : "40px",
  };

  const colorStyles = {
    height: expand.colors
      ? `${colorsContainer?.current?.scrollHeight}px`
      : "40px",
  };

  return (
    <div className="w-full p-4 space-y-4">
      <div
        style={brandStyles}
        ref={brandsContainer}
        className="duration-200 transition-all overflow-hidden"
      >
        <p
          onClick={() => {
            setExpand((p) => ({ ...p, brands: !p.brands }));
          }}
          className="font-semibold py-2 flex items-center justify-between"
        >
          BRAND{" "}
          <FaCaretUp
            className={`duration-200 ${
              expand.brands ? "rotate-0" : "rotate-180"
            }`}
          />
        </p>
        {brands?.map((brand, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={brand}
              name="brand"
              onChange={onBrandChange}
              className="accent-green-500"
            />
            <label htmlFor={brand} className="ml-2">
              {brand}
            </label>
          </div>
        ))}
      </div>

      <div
        ref={colorsContainer}
        style={colorStyles}
        className="duration-200 transition-all overflow-hidden"
      >
        <p
          onClick={() => {
            setExpand((p) => ({ ...p, colors: !p.colors }));
          }}
          className="font-semibold py-2 flex items-center justify-between"
        >
          COLORS
          <FaCaretUp
            className={`duration-200 ${
              expand.colors ? "rotate-0" : "rotate-180"
            }`}
          />
        </p>
        <div className="flex flex-wrap gap-2 p-1">
          {colors?.map((color, index) => (
            <input
              readOnly={true}
              key={index}
              className="w-6 h-6 shadow-md rounded-full cursor-pointer focus:outline-slate-900"
              style={{
                backgroundColor: color,
                border: `.1rem solid ${color == "#FFFFFF" && "#00000044"}`,
              }}
              onClick={() => onColorChange(color)}
            ></input>
          ))}
        </div>
      </div>

      {/* Sort Section */}
      <div>
        <p className="font-semibold">SORT BY</p>
        <select className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm">
          <option>Best match</option>
          <option>New</option>
          <option>Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
