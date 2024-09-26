import FilterComponent from "@/components/filterComponent/FilterComponent";
import Hero from "@/components/hero/Hero";
import ProductCard from "@/components/product/Product";
import {
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetProductsQuery,
} from "@/redux/api/proucts";
import { cart } from "@/redux/slices/cart-slice";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [brandsUrl, setBrandsUrl] = useState("");
  const [colorsUrl, setColorsUrl] = useState("");
  const [prevColor, setPrevColor] = useState("");
  const [highlightColor, setHighlightColor] = useState({
    active: false,
    id: -1,
  });
  const [checkRating, setCheckRating] = useState("");
  const [checkPrice, setCheckPrice] = useState("");
  const { data, isFetching } = useGetProductsQuery({
    page: 1,
    limit: 8,
    brand: brandsUrl,
    color: colorsUrl,
    rating: checkRating,
    price: checkPrice,
  });

  const { data: brands } = useGetBrandsQuery();
  const { data: colors } = useGetColorsQuery();

  const [selectedBrands, setSelectedBrands] = useState(
    brands?.reduce((acc, brand) => ({ ...acc, [brand]: false }), {})
  );

  const handleBrandChange = (event) => {
    const { id, checked } = event.target;
    setSelectedBrands((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  useEffect(() => {
    if (selectedBrands) {
      let filteredSelectedBrands = [];
      for (const key in selectedBrands) {
        selectedBrands[key] && filteredSelectedBrands.push(key);
      }
      let url = "";

      filteredSelectedBrands.forEach((item) => {
        url += `&brand_name=${item}`;
      });
      setBrandsUrl(url);
    }
  }, [selectedBrands]);

  const handleColorChange = (color) => {
    setPrevColor(color);

    if (prevColor == color) {
      setColorsUrl("all");
      setPrevColor("");
      setHighlightColor((p) => ({ ...p, id: -1 }));
    } else {
      color = color.split("");
      color.shift();
      setColorsUrl(`&color_options_like=%23${color.join("")}`);
    }
  };

  const handleFilter = (e) => {
    e = e.target.value;
    if (e == "rating") {
      setCheckRating("&ratings_stars=4.2");
    } else if (e == "price") {
      setCheckPrice("&_sort=price");
      setCheckRating("");
    } else {
      console.log(e);

      setCheckPrice("");
      setCheckPrice("");
    }
  };

  return (
    <div>
      <Hero />
      <div className="filter py-8 bg-[#D5F8CF]">
        <div className="wrapper text-[#0BA42D] flex items-center justify-between">
          <h3 className="filter__heading text-xl font-Hammer">Filter By:</h3>
          <select
            onChange={(e) => handleFilter(e)}
            className="filter__optoins border-none outline-none bg-transparent"
          >
            <option value="">Sort By</option>
            <option value="rating">Rating 4.2 ^</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="wrapper">
        <div className="products flex flex-col md:flex-row justify-between">
          <div className="products__filters md:w-2/6">
            <FilterComponent
              brands={brands}
              colors={colors}
              onBrandChange={handleBrandChange}
              onColorChange={handleColorChange}
              highlightColor={highlightColor}
              setHighlightColor={setHighlightColor}
            />
          </div>
          <div className="products__container grid sm:grid-cols-2 lg:grid-cols-3 md:w-2/3 gap-3">
            {!isFetching
              ? data.map((product) => (
                  <ProductCard cart={cart} key={product.id} product={product} />
                ))
              : new Array(10).fill().map((_, idx) => (
                  <div
                    key={idx}
                    role="status"
                    className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex items-center mt-4">
                      <svg
                        className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
