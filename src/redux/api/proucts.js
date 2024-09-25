import { api } from "./index";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ page = 1, limit = 8, brand = "all", color = "all" }) => ({
        url: `/products?_page=${page}&_limit=${limit}${brand}${color}`,
      }),
      providesTags: ["Products"],
    }),
    getBrands: build.query({
      query: (params) => ({
        url: "/brands",
        params,
      }),
    }),
    getColors: build.query({
      query: (params) => ({
        url: "/colors",
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetBrandsQuery, useGetColorsQuery } =
  productsApi;
