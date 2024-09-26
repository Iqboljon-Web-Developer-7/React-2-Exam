import React, { useEffect, useRef, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const FilterComponent = ({
  brands,
  colors,
  onBrandChange,
  onColorChange,
  highlightColor,
  setHighlightColor,
}) => {
  const [expand, setExpand] = useState({
    brands: false,
    colors: false,
    sorBy: false,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 768 &&
        setExpand({ brands: false, colors: false, sorBy: false });
    });
  }, []);

  const brandsContainer = useRef();
  const colorsContainer = useRef();
  const sorBy = useRef();

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

  const sortByStyle = {
    height: expand.sorBy ? `${sorBy?.current?.scrollHeight}px` : "40px",
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
        <div className="grid grid-cols-2  sm:grid-cols-4 md:block">
          {brands?.map((brand, index) => (
            <div key={index} className=" md:flex items-center">
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
            <div
              key={index}
              style={{
                backgroundColor: color,
                borderColor: `${color == "#FFFFFF" && "#00000033"}`,
              }}
              className={`w-6 h-6 shadow-md rounded-full cursor-pointer border-2 border-transparent ${
                highlightColor.id == index && "scale-90 border-slate-900"
              }`}
              onClick={() => {
                setHighlightColor((p) => ({ active: !p.active, id: index }));
                onColorChange(color);
              }}
            ></div>
          ))}
        </div>
      </div>

      <div
        ref={sorBy}
        style={sortByStyle}
        className="flex justify-between flex-col duration-200 md:block overflow-hidden"
      >
        <p
          onClick={() => {
            setExpand((p) => ({ ...p, sorBy: !p.sorBy }));
          }}
          className="font-semibold flex justify-between"
        >
          SORT BY{" "}
          <FaCaretUp
            className={`duration-200 ${
              expand.sorBy ? "rotate-0" : "rotate-180"
            }`}
          />
        </p>
        <div className="mt-3">
          <p>Best match</p>
          <p>New</p>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
